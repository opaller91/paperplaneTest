import React, { Component } from 'react';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaFilter } from "react-icons/fa";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          url: '/assets/images/ContactUsHead.jpeg',
        },
        {
          url: '/assets/images/PaperPlaneProject.png',
        },
        {
          url: '/assets/images/LoydClub.png',
        },
        {
          url: '/assets/images/Gir.png',
        },
        {
          url: '/assets/images/Tahona.png',
        },
        {
          url: '/assets/images/Sanctuary.png',
        },
      ],
      projects: [
        {
          url: '/assets/images/TichucaH.png',
          name: 'Tichuca',
          category: 'Cocktail Bar',
          location: 'Bangkok',
          year: '2020',
        },
        {
          url: '/assets/images/PaperH.png',
          name: 'Paper Plane Project',
          category: 'Co-working Space / Live Music Bar / Night Club',
          location: 'Bangkok',
          year: '2020',
        },
        {
          url: '/assets/images/LloyH.png',
          name: 'Lloyd Club',
          category: 'Cocktail Bar',
          location: 'Bangkok',
          year: '2020',
        },
        {
          url: '/assets/images/GirH.png',
          name: 'Gir',
          category: 'Cocktail Bar',
          location: 'Location Detail',
          year: '2020',
        },
        {
          url: '/assets/images/TahonaH.png',
          name: 'Tahona',
          category: 'Cocktail Bar',
          location: 'Bangkok',
          year: '2020',
        },
        {
          url: '/assets/images/SanctuaryH.png',
          name: 'Sanctuary',
          category: 'Cocktail Bar',
          location: 'Bangkok',
          year: '2020',
        },
      ],
      currentIndex: 0,
      hovered: false,
      animationDirection: 'left'
    };
    this.intervalDuration = 4000;
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    this.slideInterval = setInterval(this.nextSlide, this.intervalDuration);
  }

  stopAutoSlide = () => {
    clearInterval(this.slideInterval);
  }

  resetAutoSlide = () => {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex === prevState.slides.length - 1 ? 0 : prevState.currentIndex + 1,
      animationDirection: 'left'
    }));
    this.resetAutoSlide();
  };

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex === 0 ? prevState.slides.length - 1 : prevState.currentIndex - 1,
      animationDirection: 'right'
    }));
    this.resetAutoSlide();
  };

  goToSlide = (slideIndex) => {
    this.setState({
      currentIndex: slideIndex,
      animationDirection: slideIndex > this.state.currentIndex ? 'left' : 'right'
    });
    this.resetAutoSlide();
  };

  render() {
    const { slides, projects, currentIndex, animationDirection } = this.state;
    return (
      <div className="home-container">
        {/* Filter Icon */}
        <div className="filter-icon">
          <FaFilter onClick={this.props.toggleNavBar} />
        </div>

        <section id="image-carousel">
          <div className="relative z-50 group h-screen">
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${slide.url})` }}
                className={`absolute inset-0 bg-center bg-cover transition-transform duration-700 ${currentIndex === index ? (animationDirection === 'left' ? 'slide-in-left' : 'slide-in-right') : 'hidden'}`}
              ></div>
            ))}
            <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-base p-2 text-white cursor-pointer">
              <IoMdArrowBack onClick={this.prevSlide} size={35} />
            </div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-base p-2 text-white cursor-pointer">
              <IoMdArrowForward onClick={this.nextSlide} size={35} />
            </div>
            <div className="scroll-indicator d-flex justify-content-center align-items-center" style={{ marginTop: '20px', width: '100vw' }}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => this.goToSlide(index)}
                  style={{
                    cursor: 'pointer',
                    width: '40px',
                    height: '10px',
                    backgroundColor: '#000',
                    transform: currentIndex === index ? 'translateX(-10px)' : 'none',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="container justify-center text-center p-32 font-montserrat leading-3 text-lg font-normal">
          <p><span className='font-semibold'>Paper Plane Studio</span> is a Bangkok based design studio working</p>
          <p>across architecture, interior, furniture, and product design.</p>
          <br></br>
          <p>Our mission is to bring client vision into being resulting in</p>
          <p>successful hospitality business projects.</p>
        </div>
        <section id="projects">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <a href='/project-detail' key={index}>
                <div className="relative overflow-hidden group cursor-pointer"
                    onMouseEnter={() => this.setState({ hovered: true })}
                    onMouseLeave={() => this.setState({ hovered: false })}>
                  <div className="block relative w-full h-full">
                    <img
                      src={project.url}
                      alt={`Project ${index + 1}`}
                      className="object-cover w-full h-full transition duration-700 transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 hidden bg-black bg-opacity-50 group-hover:flex">
                      <div className="my-12 mx-7 text-left text-white font-montserrat transform transition duration-300 translate-x-full group-hover:translate-x-0">
                        <p className="text-lg font-light">Project</p>
                        <h3 className="text-4xl font-bold group-hover:break-all mb-24">{project.name}</h3>
                        <span 
                          className={`block absolute left-0 bg-white h-1 transition-transform duration-1000 ${this.state.hovered ? 'w-full scale-100' : 'w-0 scale-0'}`}
                          style={{ transformOrigin: this.state.hovered ? 'left' : 'right' }}
                        ></span>
                        <div className="pt-4 flex">
                          <div className='text-lg font-light'>Categories</div>
                          <div className='ml-5 text-lg font-semibold group-hover:break-all'>{project.category}</div>
                        </div>
                        <div className="flex">
                          <div className='text-lg font-light'>Location</div>
                          <div className='ml-10 text-lg font-semibold group-hover:break-all'>{project.location}</div>
                        </div>
                        <div className="flex">
                          <div className='text-lg font-light'>Year</div>
                          <div className='ml-20 text-lg font-semibold'>{project.year}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
