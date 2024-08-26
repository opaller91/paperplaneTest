import React, { useCallback, useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectedLogo, selectedButtons, isProjectContentVisible, selectedActiveButtons, selectedIsMenuOpen } from '../../features/navbar/navbarSliceSelectors';
import { handleProjectButtonClick, setActiveButtons, toggleMenuHandler } from '../../features/navbar/navbarSliceActions';
import { filterProjectsByName, resetFilter } from '../../features/work-projects/projectSliceReducer'; // Import the action to filter projects
import { motion, AnimatePresence } from "framer-motion";
import NavbarButton from './NavbarButton';

const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const logo = useSelector(selectedLogo);
    const buttons = useSelector(selectedButtons);
    const isMenuOpen = useSelector(selectedIsMenuOpen);
    const isProjectClick = useSelector(isProjectContentVisible);
    const activeButtons = useSelector(selectedActiveButtons);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to manage search box visibility
    const [searchQuery, setSearchQuery] = useState(''); // State to manage search input

    const toggleMenu = useCallback(() => {
        if (location.pathname === '/') {
            dispatch(toggleMenuHandler());
        } else {
            navigate('/');
            dispatch(toggleMenuHandler());
        }
    }, [dispatch, location.pathname, navigate]);

    const handleProjectClick = useCallback(() => {
        dispatch(handleProjectButtonClick());
    }, [dispatch]);

    const handleNormalButtonClick = useCallback((buttonTitle) => {
        dispatch(setActiveButtons(buttonTitle));
        setIsNavVisible(false);
    }, [dispatch]);

    const handleSearchClick = useCallback(() => {
        if (!location.pathname.startsWith('/projects'))
        {
            dispatch(resetFilter());
            dispatch(setActiveButtons('All'));
            dispatch(setActiveButtons('PROJECT')); // Activate the PROJECT button in Navbar
            navigate('/projects');
        }
        setIsSearchVisible(true); // Toggle search box visibility
    }, [isSearchVisible, navigate, dispatch]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        dispatch(filterProjectsByName(e.target.value)); // Dispatch the search action with the search query as the user types
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            dispatch(filterProjectsByName(searchQuery)); // Dispatch the search action with the search query
            setIsSearchVisible(false);
        }
    };

    useEffect(() => {
        if (activeButtons.includes('PROJECT') && !isProjectClick) {
            dispatch(handleProjectButtonClick());
        }
    }, [activeButtons, isProjectClick, dispatch]);

    useEffect(() => {
        setIsNavVisible(true);
        if (location.pathname != '/projects') {
            setIsSearchVisible(false);
        }

    }, [location.pathname]);

    const renderButton = (button) => {
        const isProjectButton = button.title === 'PROJECT';
        const handleClick = isProjectButton ? handleProjectClick : () => handleNormalButtonClick(button.title);

        return (
            <NavbarButton
                key={button.title}
                button={button}
                activeButtons={activeButtons}
                handleClick={handleClick}
            />
        );
    };

    if (!isNavVisible) return null;

    return (
        <section id='navbar' className='overflow-hidden'>
            <nav className={`${location.pathname === '/' ? 'flex flex items-center z-10 w-full h-[97.4587px] -mt-4 px-14 navbar-bg' : 'fixed flex items-center z-10 w-full h-[97.4587px] -mt-4 px-14'}`}>
                <div className={location.pathname === '/' ? 'navbar-bg' : 'navbar-black-bg'}></div>
                <div className='flex items-center justify-between w-full'>
                    <div className='navbar-content flex items-center mt-3'>
                        <Link to='/' className='flex'>
                            <img src={logo} alt='Home Logo' className='logo max-w-58px max-h-80px filter' />
                        </Link>
                    </div>

                    <div className='flex-1'></div>
                    <div className='w-[145px]'></div>

                    <div className='flex items-center justify-center isPC mt-3'>
                        <div className={`navbar-content flex font-montserrat font-normal text-lg tracking-wide`}>
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        className='z-10'
                                        initial={{ x: '30%', opacity: 0 }}  // Start slightly offscreen and invisible
                                        animate={{ x: 0, opacity: 1 }}     // Slide in and fade in
                                        exit={{ x: '30%', opacity: 0 }}    // Slide out and fade out
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className='flex items-center space-control'>
                                            {buttons.map(renderButton)}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {buttons.find(button => button.title === 'PROJECT')?.projects && (
                                <AnimatePresence>
                                    {isProjectClick && location.pathname == '/projects' && (
                                        <motion.div
                                            className={`project-sub-buttons absolute flex flex-wrap top-10 items-center font-montserrat font-normal search-text z-10 space-control ml-32`}
                                            initial={{ opacity: 0, y: -15 }}
                                            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                                            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
                                        >
                                            {buttons.find(button => button.title === 'PROJECT').projects.map((project, subIndex) => (
                                                <NavbarButton
                                                    key={subIndex}
                                                    button={project}
                                                    activeButtons={activeButtons}
                                                    handleClick={() => handleNormalButtonClick(project.title)}
                                                />
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    </div>

                    <div className='flex-1'></div>

                    <div className='ham flex navbar-content items-center justify-end mt-3'>
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                className='z-10'
                                initial={{ x: '30%', opacity: 0 }}  // Start slightly offscreen and invisible
                                animate={{ x: 0, opacity: 1 }}     // Slide in and fade in
                                exit={{ x: '30%', opacity: 0 }}    // Slide out and fade out
                                transition={{ duration: 0.5 }}
                                >
                                    <div
                                        className='text-white font-montserrat font-normal search-text no-underline mr-6 mt-2'
                                        style={{ '--transition-width': '110px', cursor: 'pointer' }}
                                        onClick={handleSearchClick}
                                    >
                                        SEARCH
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={17} color='white' className="mt-2"/>
                    </div>
                </div>

                {isSearchVisible && location.pathname.startsWith('/projects') && (
                    <div className="search-box flex items-center justify-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            onKeyDown={handleSearchSubmit} // Listen for Enter key press
                            placeholder="Search projects..."
                            className="search-input"
                        />
                    </div>
                )}
            </nav>
        </section>
    );
};

export default React.memo(Navbar);