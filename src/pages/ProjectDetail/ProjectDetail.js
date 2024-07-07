import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { SlArrowUpCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";


function ProjectDetail() {
    const [isTall, setIsTall] = useState(window.innerHeight > 500 && window.innerWidth > 800);

    // Function to handle the conversion of vertical scroll to horizontal scroll
    const handleScroll = (event) => {
        const delta = event.deltaY; // Get the amount of vertical scroll
        event.currentTarget.scrollLeft += delta; // Apply it as horizontal scroll
    };

    useEffect(() => {
        const element = document.querySelector('.ProjectDetail');
        element.addEventListener('wheel', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            element.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsTall(window.innerHeight > 500 && window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToDirection = () => {
        const element = document.querySelector('.ProjectDetail');  // Assuming this is the scrollable container
    
        if (isTall) {
            // Assuming the container can scroll horizontally
            element.scroll({
                top: 0,
                left: 0,  // Scrolls to the far left
                behavior: 'smooth'
            });
        } else {
            // Assuming the container can scroll vertically
            window.scrollTo({
                top: 0,  // Scrolls to the top
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`ProjectDetail font-montserrat bg-white min-h-screen ${isTall ? 'd-flex flex-nowrap overflow-auto' : 'flex-column overflow-visible'}`}>
            {isTall ? (
                <>
                    <div className="project-item ml-10" style={{ position: 'relative', height: '200px',minWidth: '500px' }}>
                        <p className='mt-56'>Bangkok, Thailand 2020</p>
                        <h1>Tichuca</h1>
                        <h3>Rooftop Cocktail Bar</h3>
                        <p style={{ marginTop: '2px', marginBottom: '2px' }}>Categories : Architectural Planning, Furniture Design</p>
                        <p style={{ marginTop: '2px', marginBottom: '2px' }}>Area : 275 sqm</p>
                        <p style={{ marginTop: '2px', marginBottom: '2px' }}>Year : 2020</p>
                    </div>
                    <div className="project-item" style={{ flex: 1 , height: '100vh',minWidth: '1000px'}}>
                        <img src='/assets/images/ContactUsHead.jpeg' alt="Header Pic" style={{height: '100%', objectFit: 'cover' }} />
                    </div>
                </>
            ) : (
                <>
                   <div className="project-item" style={{ flex: 1 , height: '100vh'}}>
                        <img src='/assets/images/ContactUsHead.jpeg' alt="Header Pic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="project-item" style={{ position: 'relative', height: 'auto' }}>
                        <p className='mt-10'>Bangkok, Thailand 2020</p>
                        <h1>Tichuca</h1>
                        <h3>Rooftop Cocktail Bar</h3>
                        <p style={{ marginTop: '2px', marginBottom: '2px' }}>Categories : Architectural Planning, Furniture Design</p>
                        <p style={{ marginTop: '2px', marginBottom: '2px' }}>Area : 275 sqm</p>
                        <p style={{ marginTop: '2px', marginBottom: '2px' }}>Year : 2020</p>
                    </div>
                </>
            )}
            <div className="project-item"  style={{  height: '100vh'}}>
                <div className="bg-white flex items-start justify-start relative mt-2" style={{ width: '250px', height: '400px'}}>
                    <img src='/assets/images/ProjectPic2.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <img src='/assets/images/ProjectPic3.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='ml-4'/>
                </div>
                <img src='/assets/images/ProjectPic4.png' alt="Detail Image" style={{ width: '520px', height: '400px', objectFit: 'cover' }} className='mt-2'/>
            </div>
            <div className="project-item mt-16 ml-5" >
                {isTall ? (
                        <h1>Converting an ordinary rooftop into a vibrant tropical rainforest oasis.The inspiration stemmed from a dual longing.</h1>
              
                    ) : (
                        <p className='items-start'>Converting an ordinary rooftop into a vibrant tropical rainforest oasis. The inspiration stemmed from a dual longing: the yearning for the serene embrace of nature and the excitement that comes with a dynamic urban nightlife. This fusion of desires prompted us to conceive Tichuca, an extraordinary venture that bridges the gap between these seemingly disparate worlds.</p>
                    )}
               
            </div>
            <div className="project-item ml-10 mt-4" style={{  height: '640px'}}>
                <img src='/assets/images/ProjectPic5.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-item ml-10" >
                <p style={{ width: '90%'}}>Tichuca is more than just a venue; it's an experiential haven that intimately connects individuals with the captivating Bangkok skyline while offering respite from the demands of their daily routines. The endeavor involves a transformation that turns the typically mundane floors 46 to 50 into an immersive jungle-like environment.</p>
            </div>
            <div className="project-item mt-4" style={{  height: '650px'}}>
                <img src='/assets/images/ProjectPic6.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="project-item " >
                <div className="bg-white flex flex-col items-start justify-start relative ml-8 mt-4" style={{ width: '650px'}}>
                    <p style={{ width: '100%'}}>The tree sculpture will serve as the focal point, with roots extending outward to function as both counter bars and benches throughout the space. This concpet not only provides practical seating and serving areas but also adds a touch of natural aesthetics, seamlessly integrating the beauty of nature with the functionality of the venue.</p>
                    <img src='/assets/images/ProjectPic12.png' alt="Detail Image" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                </div>
            </div>
            <div className="project-item ml-20 " >
                <div className="bg-white flex items-start justify-start relative ml-8 mt-4" style={{ width: '700px'}} >
                    <img src='/assets/images/ProjectPic13.png' alt="Detail Image" style={{ width: isTall ? '80%' : '50%', height: '650px', objectFit: 'cover' }} />
                    {isTall ? (
                        <h3  className='ml-10 mt-40' style={{ width: '100%'}}>Tichuca promises an unforgettable journey, inviting even the most urban-weary souls to escape the routine and immerse themselves in a truly remarkable setting</h3>
              
                    ) : (
                        <p  className='ml-10 mt-40' style={{ width: '250px'}}>Tichuca promises an unforgettable journey, inviting even the most urban-weary souls to escape the routine and immerse themselves in a truly remarkable setting</p>
                    )}
                    
                </div>
            </div>
            <div className="project-item ml-20" >
                {isTall ? (
                    <>
                        <div className="bg-white flex flex-col items-start justify-start relative ml-8 mt-4" style={{ width: '650px'}}>
                            <img src='/assets/images/ProjectPic7.png' alt="Detail Image" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                            <img src='/assets/images/ProjectPic8.png' alt="Detail Image" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                        </div>
                    </>
                ):(
                    <>
                        <div className="bg-white flex  items-start justify-start relative mt-4" style={{ width: '650px'}}>
                            <img src='/assets/images/ProjectPic7.png' alt="Detail Image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <img src='/assets/images/ProjectPic8.png' alt="Detail Image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        </div>
                    </>
                )}
            </div>
            <div className="project-item" >
                {isTall ? (
                    <>
                        <div className="bg-white flex flex-col items-start justify-start relative ml-8 mt-4" style={{ width: '650px'}}>
                            <img src='/assets/images/ProjectPic9.png' alt="Detail Image" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                            <img src='/assets/images/ProjectPic10.png' alt="Detail Image" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                        </div>
                    </>
                ):(
                    <>
                        <div className="bg-white flex  items-start justify-start relative  mt-4" style={{ width: '650px'}}>
                            <img src='/assets/images/ProjectPic9.png' alt="Detail Image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <img src='/assets/images/ProjectPic10.png' alt="Detail Image" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        </div>
                    </>
                )}
            </div>
            <button onClick={scrollToDirection} style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '24px' }}>
                {isTall ? (<SlArrowLeftCircle /> ) : (<SlArrowUpCircle />)}
                
            </button>
        </div>
    );
}

export default ProjectDetail;