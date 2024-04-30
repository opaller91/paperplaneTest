import React from 'react';
import '../../App.css';
import { SlLocationPin } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci"; // Import the header image

function ContactUs() {
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
        <div className="ContactUs bg-white min-h-screen relative">
            {/* Header */}
            <header className="ContactUs-header flex justify-center items-center relative" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0))' }}>
                <div style={{ position: 'relative', width: '98%', height: '350px', overflow: 'hidden' }}>
                    <img src='/assets/images/ContactUsHead.jpeg' alt="Header Pic" className='mt-2' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                    <h1 className="absolute bottom-0 right-0 text-white text-6xl font-bold mr-8 mb-4">Contact Us</h1>
                </div>
            </header>
            
            {/* Contact Information and Form */}
            <div className="max-w-4xl mx-auto mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 mt-10 mb-16">
                        <div className="flex items-center mb-4"> 
                            <SlLocationPin className="text-4xl text-gray-700 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Paper Plane Project Studio Limited</h3>
                                <p className="text-gray-700">123 Architectural Avenue, City Name</p>
                            </div>
                        </div>
                        <hr className="w-full h-1 border-black"/>
                        <div className="flex items-center mb-4"> 
                            <CiPhone className="text-4xl text-gray-700 mr-4" />
                            <div>
                                <p className="text-gray-700">02-xxx-xxxx</p>
                                <p className="text-gray-700">08x-xxx-xxxx</p>
                            </div>
                        </div>
                        <hr className="w-full h-1 border-black"/>
                        <div className="flex items-center mb-4"> 
                            <CiMail className="text-4xl text-gray-700 mr-4" />
                            <div>
                                <h3 className="text-lg">PaperPlaneExample@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                        <form>
                            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                                    <input type="text" id="firstName" className="bg-gray-100 mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-300 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
                                    <input type="text" id="lastName" className="bg-gray-100 mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-300 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                </div>
                            </div>
                            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                                    <input type="tel" id="phone" className="bg-gray-100 mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-300 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                    <input type="email" id="email" className="bg-gray-100 mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-300 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                                <input type="text" id="company" className="bg-gray-100 mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-300 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" className="bg-gray-100 mt-1 focus:outline-none focus:border-b focus:border-green-500 focus:bg-gray-300 block w-full shadow-sm sm:text-sm border-b border-blue-500 rounded-none resize-none h-32"></textarea>
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
            
            {/* Google Map */}
            <div className="  mt-8 flex justify-center items-center">
                {/* Replace with your Google Map */}
                <div style={{ width: '80%', height: '500px', backgroundColor: 'lightgray' }}>
                    <h1>Google Map Placeholder</h1>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
