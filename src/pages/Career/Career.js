import 'bootstrap/dist/css/bootstrap.min.css';
import './Career.css';
import '../../App.css';
import { MdOutlineCloudUpload } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import React, { useState, useEffect, Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tel: '',
            mail: '',
            tellUs: '',
            portfolio: ''
        };

        // Binding this to methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // You can add form submission logic here
    }

    render() {
        return (
            <div className="container mx-auto my-5">
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col className="vertical-divider">
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="name" className="form-label me-10">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="tel" className="form-label me-16">Tel</label>
                                <input type="text" className="form-control" id="tel" name="tel" value={this.state.tel} onChange={this.handleChange} />
                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                <label htmlFor="mail" className="form-label me-12">Email</label>
                                <input type="email" className="form-control" id="mail" name="mail" value={this.state.mail} onChange={this.handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tellUs" className="form-label me-12">Anything to tell us?</label>
                                <input type="text" className="form-control" id="tellUs" name="tellUs" value={this.state.tellUs} onChange={this.handleChange} />
                            </div>
                        </Col>
                        <Col>
                            <div className="mb-3">
                                <label htmlFor="portfolio" className="form-label me-2">Portfolio (URL)</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="portfolio" name="portfolio" value={this.state.portfolio} onChange={this.handleChange} />
                                    <button className="btn btn-outline-secondary" type="button" id="uploadButton">
                                        <MdOutlineCloudUpload />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <button type="submit" className="btn btn-primary float-end">
                        Submit <SlArrowRight />
                    </button>
                </form>
            </div>
        );
    }
}

export default Career;