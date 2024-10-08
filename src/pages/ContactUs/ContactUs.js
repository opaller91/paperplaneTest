import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';
import { SlArrowRight } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function ContactUs() {
    const handleSubmit = (event) => { };

    return (
        <div className="bg-black text-white font-montserrat min-h-screen min-w-screen p-5 mt-[3rem]">
            <div>
                <div className="contact-text-header mb-4 left-aligned">
                    <label>PAPER PLANE PROJECT STUDIO CO, LTD.</label>
                </div>
                <form onSubmit={handleSubmit} className="form-with-divider">
                    <hr />
                    <Row>
                        <Col md={6} className="info-column">
                            <Row className="mb-3 align-items-center">
                                <Col sm={2}>
                                    <label className="form-label mt-[-2] font-light">Location</label>
                                </Col>
                                <Col sm={9}>
                                    <label className="form-label mt-2 font-light">
                                        8 T-one Building, 12th floor, Sukhumvit 40 Rd., Phra Khanong<br />
                                        Sub-Districts, Klong toei District, Bangkok 10110.
                                    </label>
                                </Col>
                            </Row>
                            <div className="space-line-contact"></div>
                            <Row className="mb-3 align-items-center">
                                <Col sm={2}>
                                    <label className="form-label mt-2 font-light">Tel.</label>
                                </Col>
                                <Col sm={10}>
                                    <label className="form-label mt-2 font-light">+66 64 789 4428</label>
                                </Col>
                            </Row>
                            <div className="space-line-contact"></div>
                            <Row className="mb-3 align-items-center">
                                <Col sm={2}>
                                    <label className="form-label mt-2 font-light">Email</label>
                                </Col>
                                <Col sm={10}>
                                    <label className="form-label mt-2 font-light">paperplane.studio@paperplanebkk.com</label>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="additional-content">
                            <Row className="mt-4">
                                <Col className="text-header font-montserrat font-reguler left-aligned ml-4">
                                    <label className="motto-text" style={{ fontWeight: 400 }}>
                                        We are here to tackle your<br /> questions head-on
                                    </label>
                                </Col>
                            </Row>
                            <Row className='content-divider'>
                                <Col sm={2}>
                                    <label htmlFor="name" className="form-label mt-2 ml-4">Name</label>
                                </Col>
                                <div className='col-sm-9-5'>
                                    <input type="text" className="form-control ml-4" id="name" name="name" />
                                </div>
                            </Row>
                            <Row className='content-divider'>
                                <Col sm={2}>
                                    <label htmlFor="tel" className="form-label ml-4">Tel</label>
                                </Col>
                                <div className='col-sm-9-5'>
                                    <input type="text" className="form-control ml-4" id="tel" name="tel" />
                                </div>
                            </Row>
                            <Row className='content-divider'>
                                <Col sm={2}>
                                    <label htmlFor="mail" className="form-label ml-4">Mail</label>
                                </Col>
                                <div className='col-sm-9-5'>
                                    <input type="email" className="form-control ml-4" id="mail" name="mail" />
                                </div>
                            </Row>
                            <Row className='content-divider'>
                                <div className='col-sm-11-5 mb-10'>
                                    <label htmlFor="tellUs" className="form-label ml-4">Message</label>
                                    <textarea type="text" className="form-control ml-4" style={{ height: '20vh', resize: 'none' }} id="tellUs" name="tellUs" />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                </form>
                <div className="d-flex justify-content-end align-items-center" style={{ height: '5vh' }}>
                    <button type="submit" className="btn-submit" variant="none">
                        <span className="ml-6">SUBMIT</span><SlArrowRight className="icon-right" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
