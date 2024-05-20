import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { SlClose } from "react-icons/sl";

class CareerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobDetails: `0-1 year of Interior design working experience
            Bachelor’s degree in Architectural (B. Arch)
            Good skills in AutoCAD, Rhinoceros, Photoshop and other project related software
            High responsibility, good team player, enthusiastic, open minded and able to work on deadline
            Email send to (email?)
            Cover letter
            CV
            Portfolio
            Salary
            Preferable start working on (month?) onwards`
        };
    }

    renderJobDetails() {
        const { jobDetails } = this.state;
        const lines = jobDetails.split('\n');
        return lines.map((line, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>{line}</div>
        ));
    }

    render() {
        return (
            <div className="career-container">
                {/* Left Navigation Bar - Already existing */}
                {/* This part is assumed to be already created and included in the parent component */}

                {/* Right Content Section */}
                <div className="career-content">
                    {/* Top Header with Company Name and Close Icon */}
                    <div className="career-header">
                        <h2>PAPER PLANE PROJECT STUDIO</h2>
                        <SlClose style={{ cursor: 'pointer', fontSize: '24px', color: 'white' }} />
                    </div>

                    {/* Main Content Area */}
                    <div className="career-main-content">
                        {/* Left Content Section */}
                        <div className="career-left">
                            {/* Main Content */}
                            <div className="career-left-content">
                                <p className="title">Available Positions</p>
                                <div className="career-detail">
                                    <span>Junior Interior designer</span>
                                    <span>{this.renderJobDetails()}</span>
                                </div>
                                <div className="career-divider"></div>
                            </div>
                        </div>

                        {/* Right Gray Box (Google Map Placeholder) */}
                        <div className="career-map-placeholder">
                            GOOGLE MAP
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CareerComponent;
