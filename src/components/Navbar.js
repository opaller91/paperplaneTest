import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

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

    return (
        <nav className={`p-5 fixed top-0 w-full ${navbarStyle.backgroundColor}`} >
            <div className="mx-auto flex justify-between items-center">
                <img src="/images/navbar/logo/logo-white.png" alt="Paper Plane Logo" className="navbar-logo" />
                {isMenuOpen && (
                    <ul className={`flex flex-row items-center justify-center mt-3 space-x-4 ${navbarStyle.textColor} ${animationClass}`}>
                        <li><Link to="/home" className={`no-underline hover:underline ${navbarStyle.textColor}`}>HOME</Link></li>
                        <li><Link to="/project" className={`no-underline hover:underline ${navbarStyle.textColor}`}>PROJECT</Link></li>
                        <li><Link to="/studio" className={`no-underline hover:underline ${navbarStyle.textColor}`}>STUDIO</Link></li>
                        <li><Link to="/career" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CAREER</Link></li>
                        <li><Link to="/contact-us" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CONTACT</Link></li>
                    </ul>
                )}
                <div className="navbar-hamburger">
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;