import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const [isSticky, setIsSticky] = useState(false);
    // Adjust the state to also track the text color
    const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: 'bg-white',
        textColor: 'text-black', // Default text color
    });

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            console.log(offset);
            if (location.pathname === "/home" && offset <  1000) {
                // Set both background and text color when transparent
                setNavbarStyle({ backgroundColor: 'bg-transparent', textColor: 'text-white' });
            } else {
                // Set both background and text color when not transparent
                setNavbarStyle({ backgroundColor: 'bg-white', textColor: 'text-black' });
            }

            setIsSticky(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <nav className={`p-3 ${isSticky ? 'sticky top-0 z-50' : 'fixed w-full'} ${navbarStyle.backgroundColor}`} style={{ zIndex: 1000 }}>
            <div className="container mx-auto flex justify-between items-center">
                <img src="/assets/images/PaperPlaneLogo.png" alt="Paper Plane Logo" className="h-12" />
                <ul className={`flex space-x-6  ${navbarStyle.textColor} `}>
                    <li><Link to="/home" className={`no-underline hover:underline ${navbarStyle.textColor}`}>HOME</Link></li>
                    <li><Link to="/project" className={`no-underline hover:underline ${navbarStyle.textColor}`}>PROJECT</Link></li>
                    <li><Link to="/studio" className={`no-underline hover:underline ${navbarStyle.textColor}`}>STUDIO</Link></li>
                    <li><Link to="/career" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CAREER</Link></li>
                    <li><Link to="/contact-us" className={`no-underline hover:underline ${navbarStyle.textColor}`}>CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
