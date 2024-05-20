import React, { Component } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          url: '/images/home/image-carousel/Home1.png',
        },
        {
          url: '/images/home/image-carousel/Home2.png',
        },
        {
          url: '/images/home/image-carousel/Home3.png',
        },
        
      ],
      // projects: [
      //   {
      //     url: '/images/home/projects/project1.png',
      //     name: 'Project 1',
      //     category: 'Categories Detail',
      //     location: 'Location Detail',
      //     year: '2024',

      //   },
        // {
        //   url: '/images/home/projects/project2.png',
        //   name: 'Project 2',
        //   category: 'Categories Detail',
        //   location: 'Location Detail',
        //   year: '2024',
        // },
        // {
        //   url: '/images/home/projects/project3.png',
        //   name: 'Project 3',
        //   category: 'Categories Detail',
        //   location: 'Location Detail',
        //   year: '2024',
    
        // },
        // {
        //   url: '/images/home/projects/project4.png',
        //   name: 'Project 4',
        //   category: 'Categories Detail',
        //   location: 'Location Detail',
        //   year: '2024',
        // },
        // {
        //   url: '/images/home/projects/project5.png',
        //   name: 'Project 5',
        //   category: 'Categories Detail',
        //   location: 'Location Detail',
        //   year: '2024',
        // },
        // {
        //   url: '/images/home/projects/project6.png',
        //   name: 'Project 6',
        //   category: 'Categories Detail',
        //   location: 'Location Detail',
        //   year: '2024',
        // },
      // ],
      currentIndex: 0,
      hovered: false,
      animationDirection: 'next'
      
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

  prevSlide = () => {
    const { currentIndex, slides } = this.state;
    if (!slides || slides.length === 0) return;
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    this.setState({
      nextIndex: newIndex, 
      currentIndex: newIndex,
      animationDirection: 'prev',
    });
    this.resetAutoSlide();
  };

  nextSlide = () => {
    const { currentIndex, slides } = this.state;
    if (!slides || slides.length === 0) return;
    const newIndex = (currentIndex + 1) % slides.length;
    this.setState({
      currentIndex: newIndex,
      animationDirection: 'next',
      nextIndex: newIndex,
    });
    this.resetAutoSlide();
  };

  goToSlide = (slideIndex) => {
    this.setState({
      currentIndex: slideIndex,
      
    });
    this.resetAutoSlide();
  };
  
  
  
  
  render() {
    const { slides, currentIndex, animationDirection } = this.state;
    return (
      <div>
        <section id="image-carousel" >
        <div className="relative h-screen m-4 group overflow-hidden">
<div className="slide-container group ">
  {slides.map((slide, index) => (
    <div
    key={index}
    style={{
      backgroundImage: `url(${slide.url})`,
      transform: `translateX(${((index - currentIndex + slides.length) % slides.length) * -100}%)`
    }}
    className={`absolute inset-0 w-full h-full min-w-[1840px] min-h-[880px] bg-cover bg-center transition-transform ${
      currentIndex === index
        ? animationDirection === 'next'
          ? 'slide-animation-in-next'
          : 'slide-animation-in-prev'
        : animationDirection === 'next'
        ? 'slide-animation-out-next'
        : 'slide-animation-out-prev'
    }`}
  />
  ))}
</div>
  <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-base p-2 text-white cursor-pointer" onClick={this.prevSlide}>
    <SlArrowLeft size={30} />
  </div>
  <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-base p-2 text-white cursor-pointer" onClick={this.nextSlide}>
    <SlArrowRight size={30} />
  </div>
  
</div>
<div className="relative bottom-3 left-2/4 justify-center flex -translate-x-2/4">
  {slides.map((slide, index) => {
    const adjustedIndex = (currentIndex + slides.length - index) % slides.length;
    let width = currentIndex === adjustedIndex ? "w-1 mr-1" : "w-16";
    if (currentIndex < slides.length && currentIndex > adjustedIndex) {
      width = "w-1 mr-1";
    }
    return (
      <div
        key={index}
        onClick={() => this.goToSlide(index)}
        className={`block h-1 cursor-pointer text-xl transition-all duration-1000 ease-in-out ${width} bg-black`}
      />
    );
  })}
</div>
      
          
        </section>
        {/* <div className="container justify-center text-center p-32 font-montserrat leading-3 text-lg font-normal">
          <p><span className='font-semibold'>Paper Plane Studio</span> is a Bangkok based design studio working</p>
          <p>across architecture, interior, furniture, and product design.</p>
          <br></br>
          <p>Our mission is to bring client vision into being resulting in</p>
          <p>successful hospitality business projects.</p>
          
        </div>
        <section id="projects">
  <div className="container grid grid-cols-3 gap-4">
    {projects.map((project, index) => (
      <div key={index} className="relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}>
        <div className="block relative w-full h-full">
          <img
            src={project.url}
            alt={`Project ${index + 1}`}
            className="object-cover w-447 h-723 transition duration-700 transform scale-100 group-hover:scale-105 "
          />
          <div className="absolute inset-0 hidden bg-black bg-opacity-50 group-hover:flex">
            <div className="my-12 mx-7 text-left text-white font-montserrat transform transition duration-300 translate-x-full group-hover:translate-x-0">
              <p className="text-lg font-light">Project</p>
                <h3 className="text-4xl font-bold group-hover:break-all mb-24">{project.name}</h3>
                <span 
                className={`block absolute left-0 bg-white h-1 transition-transform duration-1000 ${this.state.hovered ? 'w-full scale-100' : 'w-0 scale-0'}`}
                style={{ transformOrigin: this.state.hovered ? 'left' : 'right' }}
                ></span>
                <div className="pt-4 flex flex-cols-2">
                  <div className='text-lg font-light'>Categories</div>
                  <div className='ml-5 text-lg font-semibold group-hover:break-all'>{project.category}</div>
                </div>
                <div className="flex flex-cols-2">
                  <div className='text-lg font-light'>Location</div>
                  <div className='ml-10 text-lg font-semibold group-hover:break-all'>{project.location}</div>
                </div>
                <div className="flex flex-cols-2">
                  <div className='text-lg font-light'>Year</div>
                  <div className='ml-20 text-lg font-semibold'>{project.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))}
  </div>
</section> */}
      </div>

    );
  }
}

export default Home;
