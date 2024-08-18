import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProjectsByType, resetFilter } from '../../features/work-projects/projectSliceReducer';
import { useSelector } from 'react-redux';
import { selectWorktypeImages } from '../../features/work-types/worktypeSelectors';
import { IoIosArrowForward } from "react-icons/io";
import './HomeComponent.css';

const WorkTypeGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const worktypes = useSelector(selectWorktypeImages);

  const handleClick = (worktype) => {
    // Determine the correct route and filter type
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

    // Dispatch the filter action
    if (filterType !== 'All') {
      dispatch(filterProjectsByType(filterType));
    }

    // Navigate to the correct path
    navigate(route);
  };

  return (
    <div className="grid-position grid grid-cols-2 gap-10">
      {worktypes.map((worktype, index) => (
        <div key={index} className="worktype-item">
          <div
            onClick={() => handleClick(worktype)} // Handle click here
            className="cursor-pointer font-montserrat font-semibold no-underline text-[16px] text-black"
          >
            <img src={worktype.image} alt={`Worktype ${index}`} className='worktype-image-size mb-3' />
            <div className="flex flex-col">
              <div className="flex items-center worktype-content">
                <span>{worktype.title}</span>
                <IoIosArrowForward size={14} className="ml-2" />
              </div>
              <div className={`border-t border-black ${worktype.title === 'ARCHITECTURAL DESIGN' ? 'w-[17rem]' : 'w-[14rem]'} worktype-border `} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(WorkTypeGrid);