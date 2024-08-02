import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer bg-black text-white font-montserrat">
            <div className="container mx-auto flex justify-between items-center py-8">
                <div className="footer-logo">
                    <img src="/images/navbar/logo/logo-white.png" alt="Paper Plane Logo" className="h-12" />
                    <p className="mt-2">PAPER PLANE PROJECT STUDIO</p>
                    <p>© 2024 Paper Plane Project Studio. All Rights Reserved.</p>
                </div>
                <div className="footer-links flex justify-between w-1/2">
                    <div className="footer-column">
                        <h4 className="font-bold mb-2">PROJECT</h4>
                        <ul>
                            <li><a href="/architecture" className="no-underline hover:underline">Architecture</a></li>
                            <li><a href="/interior" className="no-underline hover:underline">Interior</a></li>
                            <li><a href="/object" className="no-underline hover:underline">Object</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="font-bold mb-2">STUDIO</h4>
                        <ul>
                            <li><a href="/studio" className="no-underline hover:underline">About</a></li>
                            <li><a href="/contact-us" className="no-underline hover:underline">Contact</a></li>
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
