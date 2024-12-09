import React, { useEffect } from 'react'
import ProjectGrid from '../../components/Project/ProjectGrid'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButtons } from '../../features/navbar/navbarSliceActions';
import { toggleMenu } from '../../features/navbar/navbarSliceReducer';
import { useProjectsData } from '../../hooks/useProjectsData';
import { setAllProjects, setLoading } from '../../features/work-projects/projectSliceActions';

const Project = () => {
  const dispatch = useDispatch();
  const { data: projectsData } = useProjectsData();
  const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen); // Get the menu open state
  const activeButtons = useSelector((state) => state.navbar.activeButtons); // Get the active buttons state

  useEffect(() => {
    if (projectsData) {
      dispatch(setLoading(true));
      setTimeout(() => {
        try {
          dispatch(setAllProjects(projectsData));
          dispatch(setLoading(false)); 
        } catch (error) {
          console.error('Error fetching projects');
          dispatch(setLoading(false));
        }
      }, 500);
    }

    // Check if the menu is not open, then open it
    if (!isMenuOpen) {
      dispatch(toggleMenu());
    }

    // Check if 'PROJECT' button is not active, then activate it
    if (!activeButtons.includes('PROJECT')) {
      dispatch(setActiveButtons('PROJECT'));
    }
  }, [dispatch, projectsData, isMenuOpen, activeButtons]);

  return (
    <div className='bg-black grid 4xl:grid-cols-1 px-16 mt-40 overflow-hidden'>
      
      {/* Project Grids */}
      <ProjectGrid />
      
    </div>
  )
}

export default Project