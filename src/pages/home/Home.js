import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedScrollPosition, selectedTotalHeight } from '../../features/home-slice/homeSliceSelectors';
import { setScrollPosition, setTotalHeight } from '../../features/home-slice/homeSliceActions';
import ImageCarousel from '../../components/Home/ImageCarousel';
import LogoCarousel from '../../components/Home/LogoCarousel';
import WorkTypeGrid from '../../components/Home/WorkTypeGrid';
import InstaPictureSlice from '../../components/Home/InstaPictureSlice';
import { IoIosArrowForward } from 'react-icons/io';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const imageCarouselRef = useRef(null); // Reference for Image Carousel section
  const homeRef = useRef(null);
  const hasScrolled = useRef(false); // Track if we've already scrolled

  const handleScroll = useCallback(() => {
    dispatch(setScrollPosition(window.scrollY));

    const imageCarouselBottom = imageCarouselRef.current?.offsetTop + imageCarouselRef.current?.offsetHeight || 0;

    if (!hasScrolled.current && window.scrollY >= 10 && window.scrollY < imageCarouselBottom) {
      window.scrollTo({ top: imageCarouselBottom, behavior: 'smooth' });
      hasScrolled.current = true;
    } else if (window.scrollY <= 10) {
      hasScrolled.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (homeRef.current) {
      const homeHeight = homeRef.current.offsetHeight;
      dispatch(setTotalHeight(homeHeight));
    }
  }, [dispatch]);

  return (
    <div ref={homeRef} className="relative overflow-hidden">

      {/* Image Carousel SECTION */}
      <div className="relative" ref={imageCarouselRef}>
        <ImageCarousel />
      </div>

      {/* PAPER PLANE PROJECT STUDIO SECTION */}
      <div className="relative mt-20 p-14 bg-black text-white">
        <div className="flex flex-col items-left">
          <div className="flex-1">
            <h2 className="header-text-section font-montserrat">PAPER PLANE PROJECT STUDIO</h2>
            <div style={{ marginTop: '240.2702px' }} />
            <div className="mt-64 border-t border-white" />
            <div className="py-[38px]">
              <div className="font-montserrat font-normal studio-content leading-[1.5] tracking-widest text-white">
                <p>Paper Plane Project Studio is a reknowned design firm headquartered in Bangkok,</p>
                <p>specializing in architecture, interior, furniture, and product design for the hospitality</p>
                <p>industry. At Paper Plane Project Studio, our commitment lies in translating vision</p>
                <p>into reality with seamless execution.</p>
              </div>
            </div>
            <a href="/studio" className="font-montserrat font-medium no-underline studio-content text-white">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span>STUDIO</span>
                  <IoIosArrowForward size={14} className="ml-2" />
                </div>
                <div className="w-[5.75rem] border-t border-white" />
              </div>
            </a>
            <div style={{ marginTop: '120px' }} />
            <LogoCarousel />
          </div>
        </div>
      </div>

      {/* FOCUS AREA SECTION */}
      <div className="relative mt-20 p-14 bg-white text-black">
        <div className="flex flex-row-direction">
          {/* Left Content - Text */}
          <div className="flex-1">
            <h2 className="header-text-section font-montserrat">FOCUS AREA</h2>
            <div className='focus-space' />
            <div className='relative basis-[58%] border-b border-black' />
            <div className="mt-[38px] font-montserrat font-normal studio-content leading-[1.5] tracking-widest text-black">
              <p>Our team comprises specialized designers with profound expertise in architecture, interior</p>
              <p>design, and industrial design. We harness our extensive expertise to curate exceptional</p>
              <p>experiences, employing meticulous and detail-oriented approach to design.</p>
            </div>
          </div>

          {/* Right Content - WorkTypeGrid (Images) */}
          <div className="flex-1 flex flex-col space-y-8 mt-8 relative h-full border-l border-black md:mt-0 focus-border">
            <WorkTypeGrid />
          </div>
        </div>
      </div>


      {/* OUR LATEST UPDATE SECTION */}
      <div className="relative mt-20 p-14 bg-black text-white">
        <div className="flex flex-col items-left">
          <h2 className="header-text-section font-montserrat">OUR LATEST UPDATE</h2>
          <div className="mt-3 mb-[4.5rem]">
            <a
              href="https://www.instagram.com/paperplaneproject.studio/"
              className="font-sans font-medium no-underline text-[16px] text-white"
            >
              <div className="flex flex-col">
                <div className="flex items-center border-white">
                  <span>@paperplaneproject.studio</span>
                  <IoIosArrowForward size={15} className="ml-2" />
                </div>
                <div className="w-[14rem] border-t border-white mt-1" />
              </div>
            </a>
          </div>
          <div className="mt-4">
            <InstaPictureSlice />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;