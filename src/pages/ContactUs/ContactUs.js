import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';
import { SlArrowRight } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci"; // Import the header image

function ContactUs() {
    const handleSubmit = (event) => { };

    return (
        <div className="bg-black text-white font-montserrat min-h-screen min-w-screen p-5">
            <div>
                <div className="text-header mb-4 left-aligned ml-8">
                    <label style={{ fontSize: '72px' }}>PAPER PLANE PROJECT STUDIO CO, LTD.</label>
                </div>
                <form onSubmit={handleSubmit} className="ml-6 form-with-divider">
                    <Container className='left-aligned'>
                        <hr />
                        <Row>
                            <Col md={6} className="info-column">
                                <Row className="mb-3 align-items-center">
                                    <Col sm={2}>
                                        <label className="form-label mt-[-2]">Location</label>
                                    </Col>
                                    <Col sm={9}>
                                        <label className="form-label mt-2">
                                            8 T-one Building, 12th floor, Sukhumvit 40 Rd., Phra Khanong<br />
                                            Sub-Districts, Klong toei District, Bangkok 10110.
                                        </label>
                                    </Col>
                                </Row>
                                <Row className="mb-3 align-items-center">
                                    <Col sm={2}>
                                        <label className="form-label mt-2">Tel.</label>
                                    </Col>
                                    <Col sm={10}>
                                        <label className="form-label mt-2">+66 64 789 4428</label>
                                    </Col>
                                </Row>
                                <Row className="mb-3 align-items-center">
                                    <Col sm={2}>
                                        <label className="form-label mt-2">Email</label>
                                    </Col>
                                    <Col sm={10}>
                                        <label className="form-label mt-2">paperplane.studio@paperplanebkk.com</label>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className="additional-content">
                                <Row className="mt-4">
                                    <Col className="text-header left-aligned ml-4">
                                        <label style={{ fontSize: '36px' }}>We are here to tackle your<br /> questions head-on</label>
                                    </Col>
                                </Row>
                                <Row className='content-divider'> {/* Adds division from here onward */}
                                    <Col sm={2}>
                                        <label htmlFor="name" className="form-label mt-2 ml-4">Name</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control ml-4" id="name" name="name" />
                                    </Col>
                                </Row>
                                <Row className='content-divider'>
                                    <Col sm={2}>
                                        <label htmlFor="tel" className="form-label ml-4">Tel</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control ml-4" id="tel" name="tel" />
                                    </Col>
                                </Row>
                                <Row className='content-divider'>
                                    <Col sm={2}>
                                        <label htmlFor="mail" className="form-label ml-4">Mail</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="email" className="form-control ml-4" id="mail" name="mail" />
                                    </Col>
                                </Row>
                                <Row className='content-divider'>
                                    <Col sm={11}>
                                        <label htmlFor="tellUs" className="form-label ml-4">Message</label>
                                        <textarea type="text" className="form-control ml-4" style={{ height: '176.61px' }} id="tellUs" name="tellUs" />
                                    </Col>
                                </Row>
                                <button type="submit" className="btn-submit float-end mt-8" variant="none">
                                    <span className="ml-6">SUBMIT</span><SlArrowRight className="icon-right" />
                                </button>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;