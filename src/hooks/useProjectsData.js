import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { supabase } from '../services/supabaseClient';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  setAllProjects,
  addProject,
  updateProject,
  removeProject,
} from '../features/work-projects/projectSliceActions';
import {
  fetchProjects,
  addProjectService,
  updateProjectService,
  deleteProjectService,
} from '../services/projectsAPI';

export const useProjectsData = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { data, status, error } = useQuery('projects', fetchProjects, {
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    nSuccess: (projects) => {
        if (!Array.isArray(projects)) {
          console.error('Projects is not an array:', projects);
          return;
        }
        const normalizedProjects = projects.reduce(
          (acc, project) => ({ ...acc, [project.id]: project }),
          {}
        );
        dispatch(setAllProjects(Object.values(normalizedProjects)));
      },
  });

  useEffect(() => {
    const channel = supabase
      .channel('projects-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'projects' },
        (payload) => {
            queryClient.setQueryData('projects', (prev = []) => {
                if (!Array.isArray(prev)) {
                  console.error('Previous projects data is not an array:', prev);
                  return prev;
                }
                if (payload.eventType === 'DELETE') {
                  return prev.filter((proj) => proj.id !== payload.old.id);
                }
                const updatedProjects = prev.map((proj) =>
                  proj.id === payload.new.id ? payload.new : proj
                );
                const isNew = !prev.some((proj) => proj.id === payload.new.id);
                return isNew ? [...updatedProjects, payload.new] : updatedProjects;
              });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient, dispatch]);

  const updateProjectFieldById = async (id, updates) => {
    console.log('Updating project:', id, updates);
    try {
      const updatedProject = await updateProjectService(id, updates);
      if (updatedProject) {
        dispatch(updateProject({ id, changes: updatedProject }));
      }
      return updatedProject;
    } catch (error) {
      console.error('Error updating project:', error.message);
    }
  };

  const addNewProject = async (project) => {
    try {
      const newProject = await addProjectService(project);
      if (newProject) {
        dispatch(addProject({ id: newProject.id, ...newProject }));
      }
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

  const deleteProjectFieldById = async (projectId, filesToDelete) => {
    try {
      const isDelete = await deleteProjectService(projectId, filesToDelete);
      if (isDelete) {
        dispatch(removeProject(projectId))
      }
    } catch (error) {
      console.error('Error deleting project:', error.message);
    }
  };
  

  return {
    data,
    updateProjectFieldById,
    addNewProject,
    deleteProjectFieldById,
  };
};
