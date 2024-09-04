import React from 'react';
import './Studio.css';
import { Row, Col } from 'react-bootstrap';

function Studio() {
    return (
        <div className="bg-black text-white font-montserrat max-h-screen min-w-screen p-14 mt-14">
            <div className="studio-divider">
                <Row>
                    <Col md={5} className="custom-width-left">
                        <h1 className="text-header mb-3">
                            ABOUT
                        </h1>
                        <div className='studio-space'></div>
                        <div className="studio-content-divider">
                            <div className='mr-4 text-base font-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus venenatis velit, a tincidunt elit pulvinar eget. Duis ac ipsum quis lacus interdum tempor. Curabitur auctor nulla ut scelerisque porta. Etiam suscipit congue eros, in interdum risus elementum bibendum. Sed viverra eget nulla a molestie. Maecenas consequat mauris eros, sit amet maximus dui semper vel. Ut auctor, sem rhoncus pulvinar aliquam, felis risus aliquet massa, at tempus ipsum est nec ante. Integer ac tincidunt justo. Vestibulum rutrum enim lacus, sit amet porta lacus pharetra id. Quisque sed lorem metus. Nunc at malesuada arcu, in aliquet ex. Quisque nec enim ac purus auctor aliquam. Nulla suscipit nunc enim, ac varius felis porta a. Aenean et eleifend sapien.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} md={7} className="custom-width-right d-flex align-items-center">
                        <div className="studio-image">
                            <img src='/images/home/projects/project4.png' alt="Detail Image" className="studio-image-size img-fluid" />
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Studio;