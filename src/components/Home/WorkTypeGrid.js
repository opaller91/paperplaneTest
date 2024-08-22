import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProjectsByType, resetFilter } from '../../features/work-projects/projectSliceReducer';
import { setActiveButton, toggleProjectContent, toggleMenu } from '../../features/navbar/navbarSliceReducer'; // Import toggleMenu
import { IoIosArrowForward } from "react-icons/io";
import { selectWorktypeImages } from '../../features/work-types/worktypeSelectors';
import './HomeComponent.css';

const WorkTypeGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const worktypes = useSelector(selectWorktypeImages);
  const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen); // Get the menu open state

  const handleClick = (worktype) => {
    let route = '';
    let filterType = '';

    switch (worktype.title) {
      case 'ARCHITECTURAL DESIGN':
        route = '/projects/architecture';
        filterType = 'Architecture';
        break;
      case 'INTERIOR DESIGN':
        route = '/projects/interior';
        filterType = 'Interior';
        break;
      case 'PRODUCT DESIGN':
        route = '/projects/object';
        filterType = 'Object';
        break;
      default:
        route = '/projects';
        filterType = 'All';
        dispatch(resetFilter());
        break;
    }

    // Ensure the menu is open first, then update the state
    if (!isMenuOpen) {
      dispatch(toggleMenu());
    }
    dispatch(setActiveButton('PROJECT')); // Activate the PROJECT button in Navbar
    if (filterType !== 'All') {
      dispatch(setActiveButton(filterType)); // Activate the specific project type
      dispatch(filterProjectsByType(filterType)); // Filter the projects based on the type
    }
    navigate(route); // Navigate to the appropriate route
  };

  return (
    <div className="grid-position grid grid-cols-2 gap-10">
      {worktypes.map((worktype, index) => (
        <div key={index} className="worktype-item">
          <div
            onClick={() => handleClick(worktype)}
            className="cursor-pointer font-montserrat font-semibold no-underline text-[16px] text-black"
          >
            <img src={worktype.image} alt={`Worktype ${index}`} className='worktype-image-size mb-3' />
            <div className="flex flex-col">
              <div className="flex items-center worktype-content">
                <span>{worktype.title}</span>
                <IoIosArrowForward size={14} className="ml-2" />
              </div>
              <div className={`border-t border-black ${worktype.title === 'ARCHITECTURAL DESIGN' ? 'w-[17rem]' : 'w-[14rem]'} worktype-border`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(WorkTypeGrid);