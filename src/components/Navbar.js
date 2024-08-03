import React, {  useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import './Navbar.css';

function Navbar({ handleFilterClick }) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const navbarStyle = {
        backgroundColor: 'bg-transparent',
        textColor: 'text-white',
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            setAnimationClass('slide-up');
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 300); // Duration of slide-up animation
        } else {
            setIsMenuOpen(true);
            setAnimationClass('slide-down');
        }
    };

    const handleFilterClickLocal = (filter) => {
        setActiveFilter(filter);
        handleFilterClick(filter);
    };

    return (
        <nav className={`p-5 fixed top-0 w-full ${navbarStyle.backgroundColor}`} >
            <div className="mx-auto flex justify-between font-montserrat items-center">
                <img src="/images/navbar/logo/logo-white.png" alt="Paper Plane Logo" className="navbar-logo" />
                {(isMenuOpen && location.pathname != '/project') && (
                    <ul className={`flex flex-row items-center justify-center mt-3 space-x-4 ${navbarStyle.textColor} ${animationClass}`}>
                        <li><Link to="/home" className={`no-underline hover:underline ${navbarStyle.textColor}`}>HOME</Link></li>
                        <li><Link to="/project" className={`no-underline hover:underline ${navbarStyle.textColor}`}>PROJECT</Link></li>
                        <li><Link to="/studio" className={`no-underline hover:underline ${navbarStyle.textColor}`}>STUDIO</Link></li>
                        <li><Link to="/career" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CAREER</Link></li>
                        <li><Link to="/contact-us" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CONTACT</Link></li>
                    </ul>
                )}
                {(location.pathname === '/project' && isMenuOpen) && (
                    <div className="flex flex-col items-center mt-3">
                        <ul className={`flex flex-row items-center justify-center space-x-4 ${navbarStyle.textColor} ${animationClass}`}>
                            <li><Link to="/home" className={`no-underline hover:underline ${navbarStyle.textColor}`}>HOME</Link></li>
                            <li><Link to="/project" className={`no-underline hover:underline ${navbarStyle.textColor}`}>PROJECT</Link></li>
                            <li><Link to="/studio" className={`no-underline hover:underline ${navbarStyle.textColor}`}>STUDIO</Link></li>
                            <li><Link to="/career" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CAREER</Link></li>
                            <li><Link to="/contact-us" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CONTACT</Link></li>
                        </ul>
                        <ul className={`flex space-x-6 mt-2  ${animationClass}`}>
                            <li><button onClick={() => handleFilterClickLocal('All')} className={`no-underline hover:underline ${activeFilter === 'All' ? 'text-white' : 'text-white'}`}>All</button></li>
                            <li><button onClick={() => handleFilterClickLocal('Architecture')} className={`no-underline hover:underline ${activeFilter === 'Architecture' ? 'text-white' : 'text-white'}`}>Architecture</button></li>
                            <li><button onClick={() => handleFilterClickLocal('Interior')} className={`no-underline hover:underline ${activeFilter === 'Interior' ? 'text-white' : 'text-white'}`}>Interior</button></li>
                            <li><button onClick={() => handleFilterClickLocal('Object')} className={`no-underline hover:underline ${activeFilter === 'Object' ? 'text-white' : 'text-white'}`}>Object</button></li>
                        </ul>
                    </div>
                )}
                <div className="navbar-hamburger">
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;