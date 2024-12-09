import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectDetail.css';
import { Row, Col, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentIndex } from '../../features/image-carousel/imageCarouselSelectors';
import { resetFilter } from '../../features/work-projects/projectSliceReducer';
import { setCurrentIndex, restartAutomaticSliding } from '../../features/image-carousel/imageCarouselActions';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { setActiveButtons } from '../../features/navbar/navbarSliceActions';
import { toggleMenu } from '../../features/navbar/navbarSliceReducer';
import { selectProject } from '../../features/work-projects/projectSliceSelectors';

function ProjectDetail() {
    // const [project, setProject] = useState(null);
    const [focusedImage, setFocusedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null); // Error state for handling project fetch errors
    const dispatch = useDispatch();
    const currentIndex = useSelector(selectCurrentIndex);
    const navigate = useNavigate();
    const location = useLocation(); // Access location
    const { name } = useParams(); // Get the project name from URL params
    const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen);
    const activeButtons = useSelector((state) => state.navbar.activeButtons);
    const project = useSelector(selectProject)
    
    const images = [
        '/assets/images/PaperPlaneProject.png',
        '/assets/images/PaperPlaneProject.png',
        '/images/home/projects/project5.png'
    ];

    useEffect(() => {
        if (!project) {
            navigate('/projects');
        }
    }, [project, navigate]);

    useEffect(() => {
        if (!isMenuOpen) {
            dispatch(toggleMenu());
        }
        if (!activeButtons.includes('PROJECT')) {
            dispatch(setActiveButtons('PROJECT'));
        }
    }, [dispatch, isMenuOpen, activeButtons]);

    //const images = project?.images || []; // Use project images if available

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

    if (error) {
        return <div className="bg-black text-white font-montserrat w-full min-h-screen">{error}</div>;
    }

    if (!project) {
        return <div className="bg-black text-white font-montserrat w-full min-h-screen">Loading...</div>;
    }

    const displayName = project.name.split(',')[0];

    return (
        <div className="bg-black text-white font-montserrat w-full min-h-screen">
            <img
                src={project.image_header}
                alt="Project Detail"
                className="w-full h-[81.5vh] object-cover"
            />
            <div className='px-5 mt-14'>
                <h1 className="text-header mb-3">
                    {displayName} {/* Display project name */}
                </h1>
            </div>
            <div onClick={handleContainerClick} className='mt-10'>
                <div className='px-5'>
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
                                    <label htmlFor="areaNumber" className="form-label ml-4">{project.area} sq.m.</label>
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
                            <Row>
                                <Col xs={12} className='mt-2'>
                                    <p className="break-words">{project.description_part_1}</p>
                                </Col>
                                <Col xs={12} className='mt-4'>
                                    <p className="break-words">{project.description_part_2}</p>
                                </Col>
                                <Col xs={12} className='mt-4'>
                                    <p className="break-words">{project.description_part_3}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div style={{ height: '7.5vh' }}></div>
                </div>
                {/* Image Container */}
                <div
                    className="image-container scrollable-container mt-5 w-full"
                    onWheel={handleWheel}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            className={`image-part ${index % 2 === 0 ? 'first' : 'second'}`} // Alternate between "first" and "second"
                            alt={`Project Detail ${index + 1}`}
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
                            alt={`Project Full Detail ${focusedImage + 1}`}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </Modal.Body>
                </Modal>

                {/* Back to Projects Button */}
                <div className="flex justify-end px-5 mt-4">
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
    );
}

export default ProjectDetail;