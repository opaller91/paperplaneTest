import React, { useCallback, useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectedLogo, selectedButtons, isProjectContentVisible, selectedActiveButtons, selectedIsMenuOpen } from '../../features/navbar/navbarSliceSelectors';
import { handleProjectButtonClick, setActiveButtons, toggleMenuHandler } from '../../features/navbar/navbarSliceActions';
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

    const toggleMenu = useCallback(() => {
        if (location.pathname === '/') {
            // If the user is on the home page, just close the menu
            dispatch(toggleMenuHandler());
        } else {
            // If the user is on any other page, navigate to the home page and close the menu
            navigate('/');
            dispatch(toggleMenuHandler());
        }
    }, [dispatch, location.pathname, navigate]);

    const handleProjectClick = useCallback((e) => {
        e.preventDefault();
        dispatch(handleProjectButtonClick());
    }, [dispatch]);

    const handleNormalButtonClick = useCallback((buttonTitle) => {
        dispatch(setActiveButtons(buttonTitle));
        setIsNavVisible(false);  // Hide the navbar when navigating to a new page
    }, [dispatch]);

    useEffect(() => {
        if (activeButtons.includes('PROJECT') && !isProjectClick) {
            dispatch(handleProjectButtonClick());
        }
    }, [activeButtons, isProjectClick, dispatch]);

    useEffect(() => {
        // Show the navbar when the location changes
        setIsNavVisible(true);
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

    if (!isNavVisible) return null;  // Don't render the navbar if it's not visible

    return (
        <section id='navbar' className='overflow-hidden'>
            <nav className={`${location.pathname === '/' ? 'flex flex items-center z-10 w-full h-[131.0194px] -mt-4 px-14 navbar-bg' : 'fixed flex items-center z-10 w-full h-[131.0194px] -mt-4 px-14'}`}>
                <div className={location.pathname === '/' ? 'navbar-bg' : 'navbar-black-bg'}></div>
                <div className='flex items-center justify-between w-full'>
                    {/* Logo Section */}
                    <div className='navbar-content flex items-center'>
                        <Link to='/' className='flex'>
                            <img src={logo} alt='Home Logo' className='logo max-w-58px max-h-80px filter' />
                        </Link>
                    </div>

                    {/* Spacer for centering */}
                    <div className='flex-1'></div>
                    <div className='w-[145px]'></div>

                    {/* Menu Buttons Section */}
                    <div className='flex items-center justify-center isPC'>
                        <div className={`navbar-content flex font-montserrat font-normal text-lg tracking-wide`}>
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        className='z-20'
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100%' }}
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
                                    {isProjectClick && (
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

                    {/* Spacer for centering */}
                    <div className='flex-1'></div>

                    {/* Search/Hamburger Menu Section */}
                    <div className='ham navbar-content flex items-center justify-end'>
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    className='z-20'
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link
                                        to='/search'
                                        className='text-white font-montserrat font-normal search-text no-underline mr-6'
                                        style={{ '--transition-width': '110px' }}
                                        onClick={() => handleNormalButtonClick('SEARCH')}
                                    >
                                        SEARCH
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={20} color='white' />
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default React.memo(Navbar);