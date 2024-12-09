import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllProjects, selectedFilteredProjects, selectLoading } from '../../features/work-projects/projectSliceSelectors';
import './ProjectGrid.css';
import { setSelectProject } from '../../features/work-projects/projectSliceActions';

const WorkProjectGrid = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const navigate = useNavigate();
  const projects = useSelector(selectAllProjects);
  const filteredProjects = useSelector(selectedFilteredProjects || []);

  const handleProjectClick = (project) => {
    dispatch(setSelectProject(project));
    navigate(`/projects/detail/${project.link}`);
  };

  if (loading || !projects.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white font-montserrat text-[24px]">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="grid project-grid-col-position gap-10 justify-items-center">
      {filteredProjects.length === 0 ? (
        <div className="text-white font-montserrat text-[24px] p-14 col-span-2 h-screen">
          No results found.
        </div>
      ) : (
        filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="projects cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div className="font-montserrat font-normal no-underline projectgrid-content text-white">
              <img
                src={project.image_header}
                alt={`Project ${index}`}
                className="project-image-size mb-3 object-cover"
              />
              <div className="flex justify-between">
                <span>{project.name}, {project.year}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkProjectGrid;