import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { SlArrowUpCircle } from "react-icons/sl";

class ProjectDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth < 955,
            currentSlide: 0,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    handleScroll(event) {
        const delta = event.deltaY;
        event.currentTarget.scrollLeft += delta;
        this.updateCurrentSlide(event.currentTarget.scrollLeft);
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    handleResize() {
        this.setState({ isMobile: window.innerWidth < 955 });
    }

    updateCurrentSlide(scrollLeft) {
        const slideWidths = [1237, 522, 1180, 1180];
        let accumulatedWidth = 0;
        for (let i = 0; i < slideWidths.length; i++) {
            accumulatedWidth += slideWidths[i] + 30; // adding 30 for margin
            if (scrollLeft < accumulatedWidth) {
                this.setState({ currentSlide: i });
                break;
            }
        }
    }

    goToSlide(index) {
        const slideWidths = [1237, 522, 1180, 1180];
        let targetScrollLeft = 0;
        for (let i = 0; i < index; i++) {
            targetScrollLeft += slideWidths[i] + 30; // adding 30 for margin
        }
        document.querySelector('.image-slider').scrollLeft = targetScrollLeft;
        this.setState({ currentSlide: index });
    }

    componentDidMount() {
        const element = document.querySelector('.image-slider');
        element.addEventListener('wheel', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        const element = document.querySelector('.image-slider');
        element.removeEventListener('wheel', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { isMobile, currentSlide } = this.state;
        return (
            <div className="ProjectDetail font-montserrat bg-white min-h-screen" style={{ marginLeft: '40px', marginRight: '40px' }}>
                {/* Header */}
                <header className="d-flex justify-content-between align-items-center p-4">
                    <img src="/assets/images/PaperPlaneLogo.png" alt="Logo" style={{ width: '58px', height: '80px' }} />
                    <h1 className="m-0" style={{ fontFamily: 'Montserrat', fontSize: '64px', fontWeight: 400, lineHeight: '78.02px', textAlign: 'left' }}>Tichuca</h1>
                    <div style={{ width: '50px' }}></div> {/* Placeholder for spacing */}
                </header>

                {/* Header Image */}
                <div style={{ position: 'relative', width: 'calc(100% - 80px)', height: '880px', overflow: 'hidden', marginLeft: '40px', marginRight: '40px' }}>
                    <img src='/assets/images/ContactUsHead.jpeg' alt="Header Pic" style={{ width: '1840px', height: '880px', objectFit: 'cover' }} />
                </div>

                {/* Project Details Section */}
                <div style={{ marginLeft: '40px', marginRight: '40px', marginTop: '34px' }}>
                    {isMobile ? (
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between paragraph-info">
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20 }}>Location</p>
                                <p className='border-item' style={{marginBottom: 20}}>Bangkok, Thailand</p>
                            </div>
                            <div className="d-flex justify-content-between paragraph-info">
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20 }}>Area</p>
                                <p className='border-item' style={{marginBottom: 20}}>275 sqm</p>
                            </div> {/* <-- Closing div was missing here */}
                            <div className="d-flex justify-content-between paragraph-info">
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20 }}>Year</p>
                                <p className='border-item' style={{marginBottom: 20}}>2020</p>
                            </div>
                            <div className="d-flex justify-content-between paragraph-info">
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20 }}>Photographs</p>
                                <p className='border-item' style={{marginBottom: 20}}>Ae</p>
                            </div>
                            <div className="paragraph-text mt-4">
                                <p>Converting an ordinary rooftop into a vibrant tropical rainforest oasis. The inspiration stemmed from a dual longing: the yearning for the serene embrace of nature and the excitement that comes with a dynamic urban nightlife. This fusion of desires prompted us to conceive Tichuca, an extraordinary venture that bridges the gap between these seemingly disparate worlds.</p>
                                <p>Tichuca is more than just a venue; it's an experiential haven that intimately connects individuals with the captivating Bangkok skyline while offering respite from the demands of their daily routines. The endeavor involves a transformation that turns the typically mundane floors 46 to 50 into an immersive jungle-like environment.</p>
                                <p>Tichuca promises an unforgettable journey, inviting even the most urban-weary souls to escape the routine and immerse themselves in a truly remarkable setting. It’s a unique and inviting opportunity for those seeking to break free from the ordinary urban backdrop and relish an exceptional, unforgettable experience.</p>
                                <p>The tree sculpture will serve as the focal point, with roots extending outward to function as both counter bars and benches throughout the space. This concept not only provides practical seating and serving areas but also adds a touch of natural aesthetics, seamlessly integrating the beauty of nature with the functionality of the venue.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-md-2 paragraph-info">
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20 }}>Location</p>
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20}}>Area</p>
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20 }}>Year</p>
                                <p className='border-head' style={{ fontWeight: 500, marginBottom: 20}}>Photographs</p>
                            </div>
                            <div className="col-md-2 paragraph-info custom-margin-left">
                                <p className='border-item' style={{marginBottom: 20}}>Bangkok, Thailand</p>
                                <p className='border-item' style={{marginBottom: 20}}>275 sqm</p>
                                <p className='border-item' style={{marginBottom: 20}}>2020</p>
                                <p className='border-item' style={{marginBottom: 20}}>Ae</p>
                            </div>
                            <div className="col-md-8 paragraph-text custom-margin-left-large">
                                <p>Converting an ordinary rooftop into a vibrant tropical rainforest oasis. The inspiration stemmed from a dual longing: the yearning for the serene embrace of nature and the excitement that comes with a dynamic urban nightlife. This fusion of desires prompted us to conceive Tichuca, an extraordinary venture that bridges the gap between these seemingly disparate worlds.</p>
                                <p>Tichuca is more than just a venue; it's an experiential haven that intimately connects individuals with the captivating Bangkok skyline while offering respite from the demands of their daily routines. The endeavor involves a transformation that turns the typically mundane floors 46 to 50 into an immersive jungle-like environment.</p>
                                <p>Tichuca promises an unforgettable journey, inviting even the most urban-weary souls to escape the routine and immerse themselves in a truly remarkable setting. It’s a unique and inviting opportunity for those seeking to break free from the ordinary urban backdrop and relish an exceptional, unforgettable experience.</p>
                                <p>The tree sculpture will serve as the focal point, with roots extending outward to function as both counter bars and benches throughout the space. This concept not only provides practical seating and serving areas but also adds a touch of natural aesthetics, seamlessly integrating the beauty of nature with the functionality of the venue.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Image Slider */}
                <div className="image-slider-wrapper p-4" style={{ width: '100vw', marginLeft: '-40px', marginRight: '-40px' }}>
                    <div className="image-slider d-flex flex-nowrap overflow-auto" style={{ height: '927px' }}>
                        <div className="project-item" style={{ flex: '0 0 auto', width: '1237px', marginRight: '30px' }}>
                            <img src='/assets/images/ProjectPic2.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="project-item" style={{ flex: '0 0 auto', width: '522px', marginRight: '30px' }}>
                            <img src='/assets/images/ProjectPic3.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="project-item" style={{ flex: '0 0 auto', width: '1180px', marginRight: '30px' }}>
                            <img src='/assets/images/ProjectPic4.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="project-item" style={{ flex: '0 0 auto', width: '1180px', marginRight: '30px' }}>
                            <img src='/assets/images/ProjectPic5.png' alt="Detail Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator d-flex justify-content-center align-items-center" style={{ marginTop: '20px' ,width: '100vw',}}>
                    {Array(4).fill().map((_, index) => (
                        <div
                            key={index}
                            className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => this.goToSlide(index)}
                            style={{
                                cursor: 'pointer',
                                width: '40px',
                                height: '10px',
                                backgroundColor: '#000',
                                transform: currentSlide === index ? 'translateX(-10px)' : 'none',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                    ))}
                </div>

                {/* Buttons Container */}
                <div style={{ bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' ,marginBottom: '30px'}}>
                    {/* Scroll Button */}
                    <button onClick={this.scrollToTop} style={{ fontSize: '24px', marginBottom: '10px' }}>
                        <SlArrowUpCircle />
                    </button>
                    {/* Selected Works Button */}
                    <button style={{
                        fontFamily: 'Montserrat',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '19.5px',
                        textAlign: 'center',
                        color: '#000',
                        backgroundColor: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative'
                    }}>
                        Selected Works
                        <div style={{
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '1px',
                            backgroundColor: '#000',
                            bottom: '-5px',
                            left: '0'
                        }} />
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectDetailComponent;
