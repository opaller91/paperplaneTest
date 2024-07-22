import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectDetail.css';
import { Row, Col } from 'react-bootstrap';

function ProjectDetail() {
    const [focusedImage, setFocusedImage] = useState(null); // State to track focused image

    // Array of image sources
    const images = [
        '/assets/images/PaperPlaneProject.png',
        '/assets/images/PaperPlaneProject.png',
        '/assets/images/PaperPlaneProject.png'
    ];

    // Function to handle image click
    const handleImageClick = (index) => {
        // Toggle focus on and off
        if (focusedImage === index) {
            setFocusedImage(null); // Clicking the same image will remove focus
        } else {
            setFocusedImage(index); // Focus on clicked image
        }
    };

    return (
        <div className="bg-black text-white font-montserrat" style={{ padding: '5px', width: '100vw' }}>
            <img src='/assets/images/PaperPlaneProject.png' alt="Detail Image" style={{ width: '100%', height: '1282.35px', objectFit: 'cover' }} />
            <h1 className="text-header mb-3 mt-20" style={{ fontSize: '72px' }}>
                Paper Plane Project
            </h1>
            <dic>
                <Row>
                    <Col md={5} className="custom-width">  {/* Adjusted to md={5} for roughly 41.67% width */}
                        <Row>
                            <Col sm={9}>
                                <label htmlFor="name" className="form-label mt-2 ml-4">Location</label>
                            </Col>
                            <Col sm={2}>
                                <label htmlFor="name" className="form-label mt-2 ml-4">Bangkok</label>
                            </Col>
                        </Row>
                        <Row className='content-divider'>
                            <Col sm={8}>
                                <label htmlFor="area" className="form-label ml-4">Area</label>
                            </Col>
                            <Col sm={4}>
                                <label htmlFor="areaNumber" className="form-label ml-4">430 sq.m.</label>
                            </Col>
                        </Row>
                        <Row className='content-divider'>
                            <Col sm={9}>
                                <label htmlFor="year" className="form-label ml-4">Year</label>
                            </Col>
                        </Row>
                        <Row className='content-divider'>
                            <Col sm={9}>
                                <label htmlFor="year" className="form-label ml-4">Year</label>
                            </Col>
                            <Col sm={2}>
                                <label htmlFor="yearNumber" className="form-label ml-4">2021</label>
                            </Col>
                        </Row>
                        <Row className='content-divider'></Row>
                    </Col>
                    <Col md={7} className="d-flex justify-content-left align-items-left">
                        <Row className=' ml-10 mt-2'>
                            <Col sm={15}>
                                Converting an ordinary rooftop into a vibrant tropical rainforest oasis. The inspiration stemmed from a dual longing: the yearning for the serene embrace of nature and the excitement that comes with a dynamic urban nightlife. This fusion of desires prompted us to conceive Tichuca, an extraordinary venture that bridges the gap between these seemingly disparate worlds.
                            </Col>
                            <Col sm={15} className='mt-4'>
                                Tichuca is more than just a venue; it's an experiential haven that intimately connects individuals with the captivating Bangkok skyline while offering respite from the demands of their daily routines. The endeavor involves a transformation that turns the typically mundane floors 46 to 50 into an immersive ju-gle-like environment.
                            </Col>
                            <Col sm={15} className='mt-4'>
                                Tichuca promises an unforgettable journey, inviting even the most urban-weary souls to escape the routine and immerse themselves in a truly remarkable setting. It's a unique and thrilling opportunity for those seeking to break free from the ordinary urban backdrop and relish in an exceptional, unforgettable experience.
                            </Col>
                            <Col sm={15} className='mt-4'>
                                The tree sculpture will serve as the focal point, with roots extending outward to function as both counter bars and benches throughout the space. This con-cpet not only provides practical seating and serving areas but also adds a touch of natural aesthetics, seamlessly integrating the beauty of nature with the functionality of the venue.
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ height: '40px' }}></div>
                <div className="image-container d-flex flex-nowrap overflow-auto">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className={`image-part ${focusedImage === index ? 'focused' : ''}`}
                        alt={`Detail Image ${index + 1}`}
                        style={{
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease',
                            transform: focusedImage === index ? 'scale(1.5)' : 'scale(1)',
                            opacity: focusedImage === index || focusedImage === null ? '1' : '0.5',
                            marginRight: '4px', // Adds space between images
                            width: '700px', // Set a fixed width for each image
                            height: 'auto' // Maintain aspect ratio
                        }}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>
            </dic>
        </div>
    );
}

export default ProjectDetail;