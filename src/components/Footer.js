import React, {  useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';

function Footer({ handleFilterClick }) {
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClickLocal = (filter) => {
        setActiveFilter(filter);
        handleFilterClick(filter);
    };

    return (
        <footer className="p-5 footer bg-black text-white font-montserrat">
            <div className="mx-auto flex justify-between items-center py-8">
                <div className="footer-logo">
                    <img src="/images/navbar/logo/logo-white.png" alt="Paper Plane Logo" className="h-12" />
                    <p className="mt-2">PAPER PLANE PROJECT STUDIO</p>
                    <p>© 2024 Paper Plane Project Studio. All Rights Reserved.</p>
                </div>
                <div className="footer-links flex justify-between w-1/2">
                    <div className="footer-column">
                        <h4 className="font-bold mb-2">PROJECT</h4>
                        <ul>
                            <li><Link to="/project"><button onClick={() => handleFilterClickLocal('Architecture')}>Architecture</button></Link></li>
                            <li><Link to="/project"><button onClick={() => handleFilterClickLocal('Interior')} >Interior</button></Link></li>
                            <li><Link to="/project"><button onClick={() => handleFilterClickLocal('Object')} >Object</button></Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="font-bold mb-2">STUDIO</h4>
                        <ul>
                            <li><Link to="/studio" className="no-underline hover:underline">About</Link></li>
                            <li><Link to="/contact-us" className="no-underline hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="font-bold mb-2">MEDIA</h4>
                        <ul>
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
