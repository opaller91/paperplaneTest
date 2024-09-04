import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectDetail.css';
import { Row, Col, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentIndex } from '../../features/image-carousel/imageCarouselSelectors';
import { resetFilter } from '../../features/work-projects/projectSliceReducer';
import { setCurrentIndex, restartAutomaticSliding } from '../../features/image-carousel/imageCarouselActions';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function ProjectDetail() {
    const [focusedImage, setFocusedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const currentIndex = useSelector(selectCurrentIndex);
    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation to access state
    const project = location.state?.project; // Access the project data from the state

    const displayName = project.name.split(',')[0];


    const images = [
        '/assets/images/PaperPlaneProject.png',
        '/assets/images/PaperPlaneProject.png',
        '/images/home/projects/project5.png'
    ];

    const handleImageClick = (index) => {
        setFocusedImage(focusedImage === index ? null : index);
        dispatch(setCurrentIndex(index));
        dispatch(restartAutomaticSliding());
        setShowModal(true);
    };

    const handleIndicatorClick = (index) => {
        dispatch(setCurrentIndex(index));
        dispatch(restartAutomaticSliding());
    };

    const handleContainerClick = (e) => {
        if (e.target.className.includes('image-container')) {
            setFocusedImage(null);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBackToProjects = () => {
        dispatch(resetFilter());
        navigate('/projects');
    };

    // Handle wheel scrolling behavior for horizontal scrolling
    const handleWheel = (e) => {
        if (e.currentTarget.classList.contains('image-container')) {
            e.preventDefault(); // Prevent default vertical scroll
            e.currentTarget.scrollLeft += e.deltaY; // Scroll horizontally using the vertical wheel scroll
        }
    };

    useEffect(() => {
        const preventDefault = (e) => {
            e.preventDefault();
        };

        const imageContainer = document.querySelector('.image-container');

        if (imageContainer) {
            imageContainer.addEventListener('mouseenter', () => {
                window.addEventListener('wheel', preventDefault, { passive: false });
            });

            imageContainer.addEventListener('mouseleave', () => {
                window.removeEventListener('wheel', preventDefault);
            });
        }

        return () => {
            window.removeEventListener('wheel', preventDefault);
        };
    }, []);

    return (
        <div className="bg-black text-white font-montserrat w-full min-h-screen">
            <img
                src={project.image}
                alt="Detail Image"
                className="w-full h-[81.5vh] object-cover"
            />
            <div className='p-14'>
                <h1 className="text-header mb-3">
                    {displayName} {/* Display project name */}
                </h1>
                <div onClick={handleContainerClick} className='mt-10'>
                    <Row>
                        <Col md={5} className="custom-width mb-5">
                            <Row className="content-divider">
                                <Col xs={4}>
                                    <label htmlFor="location" className="form-label ml-4">Location</label>
                                </Col>
                                <Col xs={8} className="text-right">
                                    <label htmlFor="location" className="form-label ml-4">{project.location}</label>
                                </Col>
                                <div className="underline-full"></div>
                            </Row>
                            <Row className="content-divider">
                                <Col xs={4}>
                                    <label htmlFor="area" className="form-label ml-4">Area</label>
                                </Col>
                                <Col xs={8} className="text-right">
                                    <label htmlFor="areaNumber" className="form-label ml-4">430 sq.m.</label>
                                </Col>
                                <div className="underline-full"></div>
                            </Row>
                            <Row className="content-divider">
                                <Col xs={4}>
                                    <label htmlFor="year" className="form-label ml-4">Year</label>
                                </Col>
                                <Col xs={8} className="text-right">
                                    <label htmlFor="yearNumber" className="form-label ml-4">{project.year}</label>
                                </Col>
                                <div className="underline-full"></div>
                            </Row>
                            <Row className="content-divider">
                                <Col xs={4}>
                                    <label htmlFor="photographer" className="form-label ml-4">Photographer</label>
                                </Col>
                                <Col xs={8} className="text-right">
                                    <label htmlFor="photographer" className="form-label ml-4">{project.photographer}</label>
                                </Col>
                                <div className="underline-full"></div>
                            </Row>
                        </Col>
                        <Col md={8} className="d-flex justify-content-start align-items-start project-col">
                            <Row className='mt-2'>
                                <Col xs={12}>
                                    Converting an ordinary rooftop into a vibrant tropical rainforest oasis. The inspiration stemmed from a dual longing: the yearning for the serene embrace of nature and the excitement that comes with a dynamic urban nightlife. This fusion of desires prompted us to conceive Tichuca, an extraordinary venture that bridges the gap between these seemingly disparate worlds.
                                </Col>
                                <Col xs={12} className='mt-4'>
                                    Tichuca is more than just a venue; it's an experiential haven that intimately connects individuals with the captivating Bangkok skyline while offering respite from the demands of their daily routines. The endeavor involves a transformation that turns the typically mundane floors 46 to 50 into an immersive jungle-like environment.
                                </Col>
                                <Col xs={12} className='mt-4'>
                                    Tichuca promises an unforgettable journey, inviting even the most urban-weary souls to escape the routine and immerse themselves in a truly remarkable setting. It's a unique and thrilling opportunity for those seeking to break free from the ordinary urban backdrop and relish in an exceptional, unforgettable experience.
                                </Col>
                                <Col xs={12} className='mt-4'>
                                    The tree sculpture will serve as the focal point, with roots extending outward to function as both counter bars and benches throughout the space. This concept not only provides practical seating and serving areas but also adds a touch of natural aesthetics, seamlessly integrating the beauty of nature with the functionality of the venue.
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div style={{ height: '7.5vh' }}></div>
                    {/* Image Container */}
                    <div
                        className="image-container scrollable-container mt-5 -mx-14"
                        onWheel={handleWheel}
                    >
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                className={`image-part ${index === 0 ? 'first' : index === images.length - 1 ? 'last' : ''}`}
                                alt={`Detail Image ${index + 1}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>


                    {/* Slider Indicators */}
                    <div className="flex space-x-4 justify-center mt-3">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleIndicatorClick(index)}
                                className={`h-[0.7px] cursor-pointer transition-all duration-300 ease-in-out ${currentIndex === index ? 'w-20 bg-white' : 'w-[2px] bg-white'}`}
                            />
                        ))}
                    </div>

                    {/* Modal for Full Image Display */}
                    <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                        <Modal.Body className="p-0">
                            <img
                                src={images[focusedImage]}
                                alt={`Full Detail Image ${focusedImage + 1}`}
                                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            />
                        </Modal.Body>
                    </Modal>

                    {/* Back to Projects Button */}
                    <div className="flex justify-end mt-5">
                        <a
                            className="font-montserrat font-medium no-underline text-base text-white"
                            onClick={handleBackToProjects}
                        >
                            <div className="flex flex-col items-end">
                                <div className="flex items-center cursor-pointer">
                                    <span>BACK TO PROJECTS</span>
                                    <IoIosArrowForward size={14} className="ml-2" />
                                </div>
                                <div className="w-[13rem] border-t border-white mt-1" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;