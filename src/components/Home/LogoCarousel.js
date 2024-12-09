import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLogos } from '../../features/logo-carousel/logoCarouselSelectors';

// const LogoCarousel = () => {
//   const logos = useSelector(selectLogos);

//   return (
//     <div className="relative content-center h-full overflow-hidden">
//       <div className="justify-items-center whitespace-nowrap py-10 mask-gradient">
//         <div className="animate-slide-left-infinite inline-block w-max">
//           {logos.map((logo, index) => (
//             <img
//               key={index}
//               src={logo}
//               alt={`Logo ${index}`}
//               className="inline h-32"
//               style={{ marginLeft: '150px', marginRight: '150px' }} // Custom margin
//             />
//           ))}
//         </div>
//         <div className="animate-slide-left-infinite inline-block w-max">
//           {logos.map((logo, index) => (
//             <img
//               key={`${index}-clone`}
//               src={logo}
//               alt={`Logo ${index} Clone`}
//               className="inline h-32"
//               style={{ marginLeft: '150px', marginRight: '150px' }} // Custom margin
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const LogoCarousel = () => {
  const logos = useSelector(selectLogos);
  const logoCount = logos.length;

  // Adjust dynamic margin for smoother spacing
  const imageWidth = 128; // Width of each logo image
  const baseMargin = 90; // Base margin for typical cases
  const scaleFactor = logoCount > 8 ? 1 - (logoCount - 8) * 0.05 : 1; // Reduce margin as logo count increases
  const dynamicMargin = baseMargin * scaleFactor; // Final margin value

  // Calculate the total width of one set of logos
  const totalWidth = logoCount * (imageWidth + dynamicMargin * 2);

  // Animation duration remains based on the total width
  const animationDuration = Math.max(15, totalWidth / 150); // Adjust divisor for animation speed

  return (
    <div className="relative content-center h-full overflow-hidden">
      <style>
        {`
          @keyframes slide-left {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-${totalWidth}px);
            }
          }
          .animate-slide-left-infinite {
            animation: slide-left ${animationDuration}s linear infinite;
          }
        `}
      </style>
      <div className="justify-items-center whitespace-nowrap mt-3 mask-gradient">
        <div className="animate-slide-left-infinite inline-block w-max">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="inline h-32"
              style={{
                marginLeft: `${dynamicMargin}px`,
                marginRight: `${dynamicMargin}px`,
              }} // Dynamic margin
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
              style={{
                marginLeft: `${dynamicMargin}px`,
                marginRight: `${dynamicMargin}px`,
              }} // Dynamic margin
            />
          ))}
        </div>
      </div>
    </div>
  );
};





export default React.memo(LogoCarousel);