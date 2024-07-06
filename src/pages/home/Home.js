import React, { Component } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

// Define withNavigation HOC
const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { url: '/images/home/image-carousel/Home1.png' },
        { url: '/images/home/image-carousel/Home2.png' },
        { url: '/images/home/image-carousel/Home3.png' },
      ],
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

  handleSlideClick = () => {
    const { navigate } = this.props;
    navigate('/project-detail/1'); // Navigate to the first project detail page
  };

  render() {
    const { slides, currentIndex, animationDirection } = this.state;
    return (
      <div>
        <section id="image-carousel">
          <div className="relative h-screen m-4 group overflow-hidden">
            <div className="slide-container group">
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
                  onClick={this.handleSlideClick}
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
      </div>
    );
  }
}

export default withNavigation(Home);