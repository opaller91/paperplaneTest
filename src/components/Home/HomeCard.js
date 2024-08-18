import React, { useEffect, useRef, useState } from 'react';

const HomeCard = ({ title, bgColor, flex, content, index, scrollPosition, totalHeight }) => {
  const bgColorClasses = {
    black: 'bg-black',
    white: 'bg-white',
  };

  const textColorClasses = {
    black: 'text-white',
    white: 'text-black',
  };

  const isRow = flex === 'row';
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'translateY(0px)',
    zIndex: 1,
  });

  useEffect(() => {
    if (cardRef.current) {
      const windowHeight = window.innerHeight;
      const cardElement = cardRef.current;
      const cardHeight = cardElement.offsetHeight;
      const offset = (windowHeight * index) + (index > 0 ? cardHeight * index : 0);

      let translateY = 0;

      if (scrollPosition > offset) {
        translateY = -(scrollPosition - offset);
      } else {
        translateY = 0;
      }

      if (scrollPosition > totalHeight - windowHeight) {
        translateY = Math.max(-(scrollPosition - offset), -(totalHeight - windowHeight - offset));
      }

      setStyle({
        transform: `translateY(${translateY}px)`,
        zIndex: 10 - index, 
      });
    }
  }, [scrollPosition, index, totalHeight]);


  const additionalClasses = isRow ? 'basis-[53%] flex flex-col' : '';
  const extraContent = isRow ? (
    <>
      <div className='relative basis-[58%] border-b border-black' />
      <div className="mt-[38px] font-montserrat font-normal text-[14px] leading-[1.5] tracking-widest text-black">
        <p>Our team comprises specialized designers with profound expertise in architecture, interior</p>
        <p>design, and industrial design. We harness our extensive expertise to curate exceptional</p>
        <p>experiences, employing meticulous and detail-oriented approach to design.</p>
      </div>
    </>
  ) : null;

  return (
    <div
      ref={cardRef}
      style={style}
      className={`${bgColorClasses[bgColor]} p-14 overflow-hidden flex flex-${flex} home-card`}
    >
      <h2 className={`text-5xl font-normal font-montserrat ${textColorClasses[bgColor]} ${additionalClasses}`}>
        {title}
        {extraContent}
      </h2>
      <div section="content">
        {content}
      </div>
    </div>
  );
};

export default HomeCard;