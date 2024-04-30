import React, { useState, useEffect } from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import { SlArrowUpCircle } from "react-icons/sl";

function Studio() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const projectData = [
        { projectName: 'Tichuca', projectDescription: 'Rooftop Cocktail Bar', imageUrl: '/assets/images/ContactUsHead.jpeg' },
        { projectName: 'Paper Plane Project', projectDescription: 'Co-working Space / Live Music Bar / Night Club', imageUrl:'/assets/images/PaperPlaneProject.png' },
        { projectName: 'Lloyd Club', projectDescription: 'Cocktail Bar', imageUrl: '/assets/images/LoydClub.png'},
    ];

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCardIndex(currentIndex => (currentIndex + 1) % projectData.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [projectData.length]);

    

    const isMobile = windowWidth < 768;
    const project = projectData[currentCardIndex];

    // Array to store team member information
    const teamMembers = [
        { firstname: 'Anantachai', lastname: 'Phupha', image: '/assets/images/Member.jpeg', position: 'Architect' },
        { firstname: 'Jetaphon', lastname: 'Leepisa', image: '/assets/images/Member.jpeg', position: 'Architect'},
        { firstname: 'Kiko', lastname: 'Manny', image: '/assets/images/Member.jpeg', position: 'Architect'},
        { firstname: 'Rungtana', lastname: 'Sirimahachai', image: '/assets/images/Member.jpeg', position: 'Architect' },
        { firstname: 'Pual', lastname: 'Macky', image: '/assets/images/Member.jpeg', position: 'Architect'},
        { firstname: 'Lin', lastname: 'Tayut',image:'/assets/images/Member.jpeg', position: 'Architect'},
    ];

    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };

    return (
        <div className="Studio bg-white min-h-screen relative">
            {/* Header */}
            
            <header className="Studio-header flex justify-center items-center relative" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,0))' }}>
                <div style={{ position: 'relative', width: '98%', height: '350px', overflow: 'hidden' }}>
                    <img src='/assets/images/CareerPic.jpeg' alt="Header Pic" className='mt-2' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                            <h1 className="text-4xl font-bold bottom-0">" We approach architectural design from an artistic heart and a pragmatic soul "</h1>
                        </div>
                    </div>
                </div>
            </header>
    
            {/* Main content */}
                <div className='' style={{position: 'relative', zIndex: 1 }}>
                    <hr className="w-full h-0 border-white"/>
                   
                    <p className='leading-relaxed px-40' style={{ lineHeight: '1.6', textAlign: 'center'}}>
                        Paper Plane Project Studio was established in 20xx by xxxxxxxxx. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac fermentum mauris. Integer ac tortor ac augue varius vehicula ut at metus. Quisque malesuada lacus nisl, eu maximus ipsum vehicula sit amet. Duis vel accumsan lorem. Praesent aliquam, lectus tristique sagittis ultricies, enim massa euismod nisl, non sagittis velit lacus id nunc. Vivamus imperdiet, enim nec tincidunt iaculis, neque odio accumsan ante, ut aliquet magna magna tristique tortor. Pellentesque diam neque, suscipit eget eros quis, cursus scelerisque urna. Sed consectetur efficitur nisl, vel accumsan neque maximus ac. Donec sit amet dui diam. Mauris malesuada ultrices facilisis.er.
                    </p>
                    <div className={`flex justify-start ${isMobile ? '' : 'fade-in'}`} style={{ width: '100%' }}>
                        <img 
                            src='/assets/images/StudioPic2.png'
                            alt="Studio Visual" 
                            style={{
                                marginLeft: '1rem',
                                width: '50%', // assumes you want the image to always take full width of its container
                                height: isMobile ? '250px':'400px'  // fixed height as you specified
                            }} 
                        />
                        <div style={{
                            marginLeft: '1rem',
                            width: isMobile ? '100%' : 'auto', // takes full width on mobile or auto width on desktop
                            marginTop: isMobile ? '1rem' : '3.5rem' // 14 tailwind units converted to rem for consistency
                        }}>
                            {isMobile ? (
                                <>
                                    <div className="fade-in">
                                        <h3 style={{ fontWeight: '600', textAlign: 'center' }}>" A design is success</h3>
                                        <h3 style={{ fontWeight: '600', textAlign: 'center' }}> when it satisfies the client</h3>
                                        <h3 style={{ fontWeight: '600', textAlign: 'center' }}> the design team and its community "</h3>
                                    </div>
                                    <p style={{ fontSize: '1rem', textAlign: 'left' }}> - PAPER PLANE MISSION </p>
                                </>

                            ):(
                                <>
                                    <div>
                                        <h2 style={{ fontWeight: '600', textAlign: 'center' }}>" A design is success</h2>
                                        <h2 style={{ fontWeight: '600', textAlign: 'center' }}> when it satisfies the client</h2>
                                        <h2 style={{ fontWeight: '600', textAlign: 'center' }}> the design team and its community "</h2>
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', textAlign: 'right' }}> - PAPER PLANE MISSION </h3>
                                </>
                            )}
                            
                        </div>
                    </div>
                    
                    {/* Project Card Slideshow */}
                    <div className="project-card" style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>
                        <div style={{
                            width: '98%', // Ensure project card width matches the header
                            display: 'flex',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ padding: '20px', width: '30%' }}>
                                <h2>Related Projects</h2>
                                <div className='mt-72 ' style={{textAlign:isMobile ? 'left' : 'right',marginLeft:isMobile ? '':'ml-48 '}}>
                               
                                     <h2 >{project.projectName}</h2>
                                     <p>{project.projectDescription}</p>
                               
                                   
                                </div>
                                
                            </div>
                            <img src={project.imageUrl} alt={project.projectName} style={{
                                width: '70%',
                                height: '450px',
                                objectFit: 'cover',
                                borderRadius: '0 8px 8px 0'
                            }} />
                        </div>
                    </div>
                    
                    <h3 className="flex justify-center font-semibold mt-4" >OUR TEAM</h3>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="flex flex-col bg-gray-100 rounded-lg shadow-md" style={{ maxWidth: '350px' }}>
                                    <img src={member.image} alt={member.firstname} className="w-100% h-52" />
                                    <div className="flex flex-col items-start ml-1">
                                        <h3 className="text-base font-semibold mb-0">{member.firstname}</h3>
                                        <h3 className="text-base font-semibold mb-0">{member.lastname}</h3>
                                        <h3 className="text-base font-normal mb-2">{member.position}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <button onClick={scrollToTop} className=" text-white py-4 px-4 rounded-md mt-8 absolute right-8">
                    <SlArrowUpCircle style={{ fontSize: "2.5rem", fontWeight: "bold" ,color: '#000000'}} />
                </button>

          
        </div>
    );
}

export default Studio;
