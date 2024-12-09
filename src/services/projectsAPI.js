import { supabase } from '../services/supabaseClient';
import { removeFileService } from './storageAPI';

const TABLE_NAME = 'projects';

export const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from(TABLE_NAME).select('*');
  
      if (error) {
        throw new Error(`Failed to fetch project data: ${error.message}`);
      }
  
      return data;
    } catch (error) {
      console.error('FetchProjects Error:', error.message);
      throw error;
    }
  };

export const addProjectService = async (projectData) => {
  try {
    console.log(projectData)
    const { data, error } = await supabase.from(TABLE_NAME).insert([projectData]);

    if (error) {
      throw new Error(`Failed to add new project: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('AddProject Error:', error.message);
    throw error;
  }
};

export const updateProjectService = async (id, updates) => {
    try {
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .update(updates)
        .eq('id', id)
        .select();
  
      if (error) {
        throw new Error(`Failed to update project with ID ${id}: ${error.message}`);
      }
  
      if (!data || data.length === 0) {
        throw new Error(`No project found with ID ${id} to update.`);
      }
  
      return data;
    } catch (error) {
      console.error('UpdateProject Error:', error.message);
      throw error;
    }
  };

export const deleteProjectService = async (projectId, filesToDelete) => {
    try {
  
      const { error: dbError } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      for (const file of filesToDelete) {
        await removeFileService(file.url)
      }
  
      if (dbError) throw new Error(`Error deleting project from database: ${dbError.message}`);

      return true;
    } catch (error) {
      console.error('Error deleting project or files:', error.message);
      throw error;
    }
  };
  
  
