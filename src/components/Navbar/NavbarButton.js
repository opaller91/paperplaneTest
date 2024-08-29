import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../features/navbar/navbarSliceReducer';
import { filterProjectsByType, resetFilter } from '../../features/work-projects/projectSliceReducer';
import { useNavigate } from 'react-router-dom';

const NavbarButton = ({ button, activeButtons }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isActive = activeButtons.includes(button.title);

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(setActiveButton(button.title));

        // Handle filtering logic in the component
        if (['Architecture', 'Interior', 'Object'].includes(button.title)) {
            dispatch(filterProjectsByType(button.title));
            navigate(`/projects/${button.title.toLowerCase()}`);
        } else if (button.title === 'All') {
            dispatch(resetFilter());
            navigate(`/projects/${button.title.toLowerCase()}`);
        } else if (button.title === 'PROJECT') {
            dispatch(resetFilter());
            navigate('/projects');
        } else {
            navigate(button.link);
        }
    };

    return (
        <div>
            <a
                href={button.link || '#'}
                className={`transition-effect text-white no-underline ${isActive ? 'active' : ''}`}
                style={{ '--transition-width': button.width }}
                onClick={handleClick}
            >
                {button.title}
                <div
                    className={`${isActive ? 'border-white' : ''}`}
                    style={{ width: button.width, pointerEvents: 'none' }}
                />
            </a>

        </div>
    );
};

export default NavbarButton;