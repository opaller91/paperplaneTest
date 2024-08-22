import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedFilteredProjects } from '../../features/work-projects/projectSliceSelectors';
import './ProjectGrid.css';

const WorkProjectGrid = () => {
  const projects = useSelector(selectedFilteredProjects);
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/projects/detail/${project.displayname}`, {
      state: { project } // Pass the entire project object
    });
  };

  return (
    <div className="grid project-grid-col-position gap-10 justify-items-center">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div 
            key={index} 
            className="projects cursor-pointer" 
            onClick={() => handleProjectClick(project)}
          >
            <div className="font-montserrat font-normal no-underline projectgrid-content text-white">
              <img 
                src={project.image} 
                alt={`Project ${index}`} 
                className='project-image-size mb-3 object-cover'
              />
              <div className="flex justify-between">
                <span>{project.name}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-white font-montserrat text-[24px] col-span-2">
          No projects available for the selected type.
        </div>
      )}
    </div>
  );
};

export default React.memo(WorkProjectGrid);