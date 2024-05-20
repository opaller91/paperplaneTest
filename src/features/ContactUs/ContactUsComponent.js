import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { SlClose } from "react-icons/sl";

class ContactUsComponent extends Component {
    render() {
        return (
            <div className="contact-us-container">
                {/* Left Navigation Bar - Already existing */}
                {/* This part is assumed to be already created and included in the parent component */}

                {/* Right Content Section */}
                <div className="contact-us-content">
                    {/* Top Header with Company Name and Close Icon */}
                    <div className="contact-us-header">
                        <h2>PAPER PLANE PROJECT STUDIO</h2>
                        <SlClose style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }} />
                    </div>

                    {/* Main Content Area */}
                    <div className="contact-us-main-content">
                        {/* Left Content Section */}
                        <div className="contact-us-left">
                            {/* Main Content */}
                            <div className="contact-us-left-content">
                                <p>Paper Plane Project Studio co.,ltd.</p>
                                <div className="contact-us-detail">
                                    <div>
                                        <span>Location</span>
                                        <span>T1 Building, 14th floor, 8 Sukhumvit Rd, Khwaeng Phra Khanong, Khet Khlong Toei, Krung Thep Maha Nakhon 10110</span>
                                    </div>
                                    <div className="contact-us-divider"></div>
                                </div>
                                <div className="contact-us-detail">
                                    <div>
                                        <span>Tel</span>
                                        <span>099-123-4567</span>
                                    </div>
                                    <div className="contact-us-divider"></div>
                                </div>
                                <div className="contact-us-detail">
                                    <div>
                                        <span>E-mail</span>
                                        <span>nattadech09@gmail.com</span>
                                    </div>
                                    <div className="contact-us-divider"></div>
                                </div>
                                <div className="contact-us-detail">
                                    <div>
                                        <span>Opening Hour</span>
                                        <span>10:00 - 18:00</span>
                                    </div>
                                    <div className="contact-us-divider"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Gray Box (Google Map Placeholder) */}
                        <div className="google-map-placeholder">
                            GOOGLE MAP
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUsComponent;
