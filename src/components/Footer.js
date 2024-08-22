import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProjectsByType, resetFilter } from '../features/work-projects/projectSliceReducer';
import { setActiveButtons } from '../features/navbar/navbarSliceActions';
import { toggleMenu } from '../features/navbar/navbarSliceReducer'; 
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen); // Get the menu open state
    const activeButtons = useSelector((state) => state.navbar.activeButtons);

    const handleFilterClick = (type) => {
        dispatch(setActiveButtons(type));
        const isProjectActive = activeButtons.includes('PROJECT');

        if (!isMenuOpen) {
            dispatch(toggleMenu());
        }

        if (!isProjectActive) {
            dispatch(setActiveButtons('PROJECT')); // Activate the PROJECT button in Navbar
        }
        
        if (type !== 'All') {
            dispatch(setActiveButtons(type)); // Activate the specific project type
            dispatch(filterProjectsByType(type)); // Filter the projects based on the type
        }

        if (type === 'All') {
            dispatch(resetFilter());
            navigate('/projects');
        } else {
            dispatch(filterProjectsByType(type));
            navigate(`/projects/${type.toLowerCase()}`);
        }
    };

    return (
        <footer className="footer bg-black font-montserrat font-normal text-lg tracking-wide text-white p-14">
            <div className="container mx-auto flex justify-between items-center py-8">
                <div className="footer-logo">
                    <img src="/images/navbar/logo/logo-white.png" alt="Paper Plane Logo" className="h-12" />
                    <p className="mt-2">PAPER PLANE PROJECT STUDIO</p>
                    <p className="text-[14px]" style={{ opacity: 0.75 }}>© 2024 Paper Plane Project Studio. All Rights Reserved.</p>
                </div>
                <div className="footer-links  text-[16px] flex justify-between w-1/2">
                    <div className="footer-column">
                        <h4 className="mb-2 list-none"><li><a href="#" onClick={() => handleFilterClick('All')} className="no-underline ">PROJECT</a></li></h4>
                        <ul className="mt-4">
                            <li><a href="#" onClick={() => handleFilterClick('Architecture')} className="no-underline hover:underline">Architecture</a></li>
                            <li><a href="#" onClick={() => handleFilterClick('Interior')} className="no-underline hover:underline">Interior</a></li>
                            <li><a href="#" onClick={() => handleFilterClick('Object')} className="no-underline hover:underline">Object</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="mb-2 list-none"><li><a href="/studio" className="no-underline ">STUDIO</a></li></h4>
                        <ul className="mt-4">
                            <li><a href="/studio" className="no-underline hover:underline">About</a></li>
                            <li><a href="/contact-us" className="no-underline hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="mb-2">MEDIA</h4>
                        <ul className="mt-4">
                            <li><a href="https://instagram.com" target="_blank" className="no-underline hover:underline">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" className="no-underline hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;