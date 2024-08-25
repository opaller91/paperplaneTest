import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImages, selectCurrentIndex, selectAnimationDirection } from '../../features/image-carousel/imageCarouselSelectors';
import { nextImage, prevImage, setCurrentIndex, startAutomaticSliding, stopAutomaticSliding, restartAutomaticSliding } from '../../features/image-carousel/imageCarouselActions';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const ImageCarousel = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const currentIndex = useSelector(selectCurrentIndex);
  const animationDirection = useSelector(selectAnimationDirection);

  useEffect(() => {
    dispatch(startAutomaticSliding(5000));

    return () => {
      dispatch(stopAutomaticSliding());
    };
  }, [dispatch]);

  const handleIndicatorClick = (index) => {
    dispatch(setCurrentIndex(index));
    dispatch(restartAutomaticSliding());
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      dispatch(nextImage());
    } else {
      dispatch(prevImage());
    }
    dispatch(restartAutomaticSliding());
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="slide-container flex transition-transform duration-1000">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${((index - currentIndex + images.length) % images.length) * -100}%)`,
            }}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform ${
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

      {/* Left Arrow */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group w-20 h-20 flex items-center justify-center">
        <SlArrowLeft
          onClick={() => handleArrowClick('prev')}
          className="text-white hover-slide-left-arrow cursor-pointer"
          size={20}
        />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 group w-20 h-20 flex items-center justify-center">
        <SlArrowRight
          onClick={() => handleArrowClick('next')}
          className="text-white hover-slide-right-arrow cursor-pointer"
          size={20}
        />
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-[0.7px] cursor-pointer transition-all duration-300 ease-in-out ${
              currentIndex === index ? 'w-20 bg-white' : 'w-[2px] bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ImageCarousel);