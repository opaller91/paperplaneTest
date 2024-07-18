import 'bootstrap/dist/css/bootstrap.min.css';
import './Career.css';
import { MdOutlineCloudUpload } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import React, { useState, useEffect, Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Placeholder } from 'react-bootstrap';

function Career() {
    // State with object destructuring
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        mail: '',
        tellUs: '',
        portfolio: ''
    });

    // Handle change for form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Assuming single file upload
    };

    const handleFileClick = () => {
        document.getElementById('fileInput').click(); // Programmatically clicks the file input
    };

    return (
        <div className="bg-black text-white font-montserrat min-h-screen min-w-screen p-5">
            <div>
                <div className="text-header leading-normal mb-4 left-aligned ml-8">
                    <p className='mb-[-1px]'>We are constantly seeking talented designers</p>
                    <p className='mb-[-1px]'>join our team of innovative, ambitious, and</p>
                    <p className='mb-[-1px]'>vibrant designers</p>
                    <a href="mailto:careers.studio@paperplanebkk.com" className="email-link">careers.studio@paperplanebkk.com</a>
                </div>
                <div className='space-height'></div>
                <form onSubmit={handleSubmit} className="ml-6">
                    <Container className='left-aligned'>
                        <hr />
                        <Row>
                            <Col md={6} className="vertical-divider">
                                <Row className="mb-3 align-items-center">
                                    <Col sm={2}>
                                        <label htmlFor="name" className="form-label mt-2">Name</label>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="mb-3 align-items-center">
                                    <Col sm={2}>
                                        <label htmlFor="tel" className="form-label">Tel</label>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" className="form-control" id="tel" name="tel" value={formData.tel} onChange={handleChange} />
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="mb-3 align-items-center">
                                    <Col sm={2}>
                                        <label htmlFor="mail" className="form-label">Mail</label>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="email" className="form-control" id="mail" name="mail" value={formData.mail} onChange={handleChange} />
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="mb-4">
                                    <Col sm={12}>
                                        <label htmlFor="tellUs" className="form-label">Anything to tell us?</label>
                                        <textarea type="text" className="form-control" style={{ height: '176.61px' }} id="tellUs" name="tellUs" value={formData.tellUs} onChange={handleChange} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Second column also half the screen */}
                                <Row className="mb-3">
                                    <Col md={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button onClick={handleFileClick} className="btn-upload" variant="none">
                                            + {/* Using a simple text "+" as the button content */}
                                        </Button>
                                        <label htmlFor="fileInput" className="form-label mt-3">Portfolio (Max 10Mb)</label>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }} // Hide the actual input element
                                        />
                                        {file && <span className="file-name">{file.name}</span>}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                    <button type="submit" className="btn-submit float-end" variant="none">
                        <span className="ml-6">SUBMIT</span><SlArrowRight className="icon-right" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Career;