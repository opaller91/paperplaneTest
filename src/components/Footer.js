import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

function Footer() {
    return (
        <div className='mt-28 mb-8'>
            <div style={{
                width: '100%',
                borderTop: '1px solid black',
                paddingTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '20px',
                boxSizing: 'border-box'
            }}>
                <div style={{ marginLeft: '20px' }}>
                    Paper Plane Studio
                </div>
                <div style={{
                    marginRight: '20px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginRight: '10px' }}><FaFacebookF /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginRight: '10px' }}><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginRight: '10px' }}><FaLinkedinIn /></a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginRight: '10px' }}><FaPinterestP /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

