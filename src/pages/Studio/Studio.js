import React, { useState, useEffect } from 'react';
import './Studio.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButtons } from '../../features/navbar/navbarSliceActions';
import { toggleMenu } from '../../features/navbar/navbarSliceReducer';
import { useStudioData } from '../../hooks/useStudioData';

function Studio() {
    const dispatch = useDispatch();
    const { data: studio } = useStudioData();
    const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen);
    const activeButtons = useSelector((state) => state.navbar.activeButtons);
    const [studioImage, setStudioImage] = useState(null); // State for the current studio image
    const [studioDetail, setStudioDetail] = useState(''); // State for current studio details

    useEffect(() => {
        if (!isMenuOpen) {
        dispatch(toggleMenu());
        }
        if (!activeButtons.includes('STUDIO')) {
        dispatch(setActiveButtons('STUDIO'));
        }
    }, [dispatch, isMenuOpen, activeButtons]);

    // Fetch data when the component is mounted
    useEffect(() => {
        if (studio) {
            setStudioImage(studio.image);
            setStudioDetail(studio.detail);
        }

        // Fetch studio image from the backend
        // axios
        //     .get('http://localhost:3001/studio/editStudio/image')
        //     .then((response) => {
        //         if (response.data?.image) {
        //             setStudioImage(response.data.image);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching studio Image!', error);
        //     });

        // // Fetch studio detail from the backend
        // axios
        //     .get('http://localhost:3001/studio/editStudio/detail')
        //     .then((response) => {
        //         if (response.data?.details) {
        //             setStudioDetail(response.data.details);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error fetching studio Detail!', error);
        //     });
    }, [studio]);
    
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
                                {studioDetail}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} md={7} className="custom-width-right d-flex align-items-center">
                        <div className="studio-image">
                            <img src={`${studioImage}`} alt="Studio Detail" className="studio-image-size img-fluid" />
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Studio;