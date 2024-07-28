import React from 'react';
import './Studio.css';
import { Row, Col } from 'react-bootstrap';

function Studio() {
    return (
        <div className="bg-black text-white font-montserrat min-h-screen min-w-screen p-5">
            <div className='studio-divider'>
                <Row>
                    <Col md={5} className="custom-width">  {/* Adjusted to md={5} for roughly 41.67% width */}
                        <h1 className="text-header mb-3" style={{ fontSize: '72px' }}>
                            ABOUT
                        </h1>
                        <div style={{ height: '226px' }}></div>
                        <div className="content-divider">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus venenatis velit, a tincidunt elit pulvinar eget. Duis ac ipsum quis lacus interdum tempor. Curabitur auctor nulla ut scelerisque porta. Etiam suscipit congue eros, in interdum risus elementum bibendum. Sed viverra eget nulla a molestie. Maecenas consequat mauris eros, sit amet maximus dui semper vel. Ut auctor, sem rhoncus pulvinar aliquam, felis risus aliquet massa, at tempus ipsum est nec ante. Integer ac tincidunt justo. Vestibulum rutrum enim lacus, sit amet porta lacus pharetra id. Quisque sed lorem metus. Nunc at malesuada arcu, in aliquet ex. Quisque nec enim ac purus auctor aliquam. Nulla suscipit nunc enim, ac varius felis porta a. Aenean et eleifend sapien.</p>
                        </div>
                    </Col>
                    <Col md={7} className="d-flex justify-content-center align-items-center">
                        <div className='studio-image'>
                            <img src='/assets/images/ProjectPic5.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Studio;
