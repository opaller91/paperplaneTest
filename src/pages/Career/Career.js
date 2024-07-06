import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { MdOutlineCloudUpload } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import React, { useState, useEffect } from 'react';

function Career() { 
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    const lifeAtPaperPlaneStyle = {
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(128, 128, 128, 0.8)', // White when hovered, otherwise gray with 80% opacity
        color: isHovered ? 'black' : 'white',
        border: '2px solid white',
        padding: '10px 20px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    const submitButtonStyle = {
        backgroundColor: 'white', // Gray with 80% opacity
        color: 'black',
        border: '1.5px solid black',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
    };


    return (
        <div className="Career font-montserrat bg-white min-h-screen relative">
            <header className="Career-header flex justify-center items-center relative" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0))' }}>
                <div style={{ position: 'relative', width: '98%', height: '350px', overflow: 'hidden' }}>
                    <img src='/assets/images/CareerPic.jpeg' alt="Header Pic" className='mt-2' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                            <h1 className="text-3xl lg:text-4xl font-bold mb-4">WANT TO JOIN US ?</h1>
                            <h1 className="font-sans text-xl lg:text-2xl font-medium mb-4">We always look for energetic designers to join us</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 relative">
                <div className="flex justify-start items-center relative">
                    <div className="position-relative">
                        <img 
                            src='/assets/images/CareerPicVenticle.jpg'
                            alt="Career Pic" 
                            className={`rounded-lg shadow-lg w-550 ${isHovered ? 'opacity-70' : ''}`} 
                        />
                        {isHovered && (
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <div className='mt-72'>
                                    <h3 className="w-80 h-0.5 my-4 bg-white border-0 rounded"></h3>
                                    <h3 className='text-4xl font-bold text-white ml-2'>Discover</h3>
                                    <h3 className='text-4xl font-bold text-white ml-2'>Life at Paper Plane</h3>
                                </div>
                            </div>
                        )}
                        <div className={`${isMobile ? 'pt-4 ml-10' : 'pt-32 ml-28'} absolute top-96 left-0`}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={lifeAtPaperPlaneStyle}
                               
                                onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <p className="text-center mt-2">Life at Paper Plane</p> <SlArrowRight className=" ml-2 object-center mt-2.5"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ml-6">
                        <div>
                            <h2 className='mt-4 font-sans font-bold text-2xl text-gray-800'>CAREERS</h2>
                            <hr className="w-100 h-1 bg-gray-700 border-0 rounded"></hr>
                            <h3 className='text-lg font-sans font-medium text-gray-600'>Please leave your information and CV below</h3>
                        </div>
                        <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg mt-4">
                            <form>
                                <div className="mb-4 flex justify-between"> 
                                    <div className="mb-4 flex-grow">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                                        <input type="text" id="firstName" className="mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-100 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                    </div>
                                    <div className="ml-4 mb-4 flex-grow">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
                                        <input type="text" id="lastName" className="mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-100 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                    </div>
                                </div>
                                <div className="mb-4 flex justify-between">
                                    <div className="mb-4 flex-grow">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                                        <input type="tel" id="phone" className="mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-100 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                    </div>
                                    <div className="ml-4 mb-4 flex-grow">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                        <input type="email" id="email" className="mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-100 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <input type="text" id="message" className="mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-100 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="file_input">CV*</label>
                                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50  focus:outline-none bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                    <p className="mt-1 text-sm text-gray-500 " id="file_input_help">Acceptable formats: PDF, DOC, JPG (Max. 10MB).</p>
                                </div>
                                <button type="submit" style={submitButtonStyle} onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'black';
                                        e.target.style.color = 'white';
                                    }} 
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.color = 'black';
                                    }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className="w-50 h-1 mx-auto my-8 bg-gray-700 border-0 rounded"></hr>
            </div>
            
        </div>
    );
}

export default Career;
