import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogos } from '../../features/logo-carousel/logoCarouselSelectors';

const LogoCarousel = () => {
  const logos = useSelector(selectLogos);
  return (
    <div className="relative content-center h-full overflow-hidden">
      <div className="justify-items-center whitespace-nowrap py-10 mask-gradient">
        <div className="animate-slide-left-infinite inline-block w-max">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="inline h-32"
              style={{ marginLeft: '43.765px', marginRight: '43.765px' }} // Custom margin
            />
          ))}
        </div>
        <div className="animate-slide-left-infinite inline-block w-max">
          {logos.map((logo, index) => (
            <img
              key={`${index}-clone`}
              src={logo}
              alt={`Logo ${index} Clone`}
              className="inline h-32"
              style={{ marginLeft: '43.765px', marginRight: '43.765px' }} // Custom margin
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(LogoCarousel);