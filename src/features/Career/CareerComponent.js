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
                <div className="career-content">
                    <div className="career-main-content">
                        <div className="career-left">
                            <div className="career-left-content">
                                <p className="title">Available Positions</p>
                                <div className="career-detail">
                                    <span>Junior Interior designer</span>
                                    <span>{this.renderJobDetails()}</span>
                                </div>
                                <div className="career-divider"></div>
                            </div>
                        </div>
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
