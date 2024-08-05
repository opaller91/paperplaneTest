import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import { SlArrowRight } from "react-icons/sl";
import Modal from 'react-modal';

function Home() {
  const [focusedImage, setFocusedImage] = useState(null); // State to track focused image

  // Array of image sources
  const images = [
    '/assets/images/HomeHeaderPic1.png',
    '/assets/images/HomeHeaderPic2.png',
    '/assets/images/HomeHeaderPic3.png',
    '/assets/images/PaperPlaneProject.png'
  ];

  // Function to handle image click
  const handleImageClick = (index) => {
    // Toggle focus on and off
    if (focusedImage === index) {
      setFocusedImage(null); // Clicking the same image will remove focus
    } else {
      setFocusedImage(index); // Focus on clicked image
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Mock data for Instagram posts
  const instagramPosts = [
    {
      url: '/assets/images/InstagramImage1.jpg',
      caption: 'This is the caption for Instagram Image 1',
    },
    {
      url: '/assets/images/InstagramImage2.jpg',
      caption: 'This is the caption for Instagram Image 2',
    },
    {
      url: '/assets/images/InstagramImage3.jpg',
      caption: 'This is the caption for Instagram Image 3',
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="bg-black text-white font-montserrat top-0 " style={{overflowX: 'hidden'}}>
      <Carousel className="custom-carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='home-header-image'
              style={{ width: '1920px', height: '1079px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='ml-10 mt-10'>
        <h1 className='home-header'>PAPER PLANE PROJECT STUDIO</h1>
        <div style={{ height: "300px" }}></div>
        <hr></hr>
        <p className="text-xl font-light mt-10">
          Paper Plane Project Studio is a renowned design firm headquartered in Bangkok,<br />
          specialising in architecture, interior, furniture, and product design for the hospitality<br />
          industry. At Paper Plane Project Studio, our commitment lies in translating vision<br />
          into reality with seamless execution.
        </p>
        <div className="button-container-home">
          <Link to="/studio" className="btn-submit-home mt-8">
            <span className="btn-text-home">STUDIO</span><SlArrowRight className="icon-right" />
          </Link>
        </div>
      </div>
      <div className="scrolling-logos mt-10">
        <div className="horizontal-logos logos-container">
          {[
            { src: '/images/LogoCompany/TichucaLogo.png' },
            { src: '/images/LogoCompany/PaperPlaneProjectLogo.png' },
            { src: '/images/LogoCompany/GirLogo.png' },
            { src: '/images/LogoCompany/LloydClubLogo.png' },
            { src: '/images/LogoCompany/TahonaLogo.png' },
            { src: '/images/LogoCompany/UnknownLogo.png' },
            { src: '/images/LogoCompany/PeaPalLogo.png' },
            { src: '/images/LogoCompany/FicoLogo.png' }
          ].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={`Logo ${index}`}
              className={`logo-image ${logo.extraSpace ? 'logo-image-extra-space' : ''}`}
            />
          ))}
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <div className="bg-white text-black font-montserrat">
        <div className='home-divider'>
          <div className="custom-width-left">
            <h1 className="text-header ml-10 mt-10" style={{ fontSize: '72px' }}>
              FOCUS AREA
            </h1>
            <div style={{ height: '226px' }}></div>
            <div className="content-divider ml-10">
              <div className="mt-10">
                <p>Our team comprises specialized designers with profound expertise in architecture, interior</p>
                <p>design, and industrial design. We harness our extensive expertise to curate exceptional</p>
                <p>experiences, employing meticulous and detail-oriented approach to design.</p>
              </div>
            </div>
            <div style={{ height: "200px" }}></div>
          </div>
          <div className="custom-width-right focus-images">
            <div className="row content-right">
              <div className="col-md-6 mb-3">
                <div className="focus-image">
                  <Link to="/project?category=Architecture" className="focus-link">
                    <img src="/assets/images/TichucaH.png" alt="Architectural Design" />
                    <p>ARCHITECTURAL DESIGN ></p>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="focus-image">
                  <Link to="/project?category=Interior" className="focus-link">
                    <img src="/assets/images/PaperH.png" alt="Interior Design" />
                    <p>INTERIOR DESIGN ></p>
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <div className="focus-image">
                  <Link to="/project?category=Object" className="focus-link">
                    <img src="/assets/images/SanctuaryH.png" alt="Product Design" />
                    <p>PRODUCT DESIGN ></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-montserrat">
        <div className='update-section ml-10 '>
          <h1 className="text-header mt-10" style={{ fontSize: '72px' }}>
            OUR LASTEST UPDATE
          </h1>
          <a href="https://www.instagram.com/paperplaneproject.studio" target="_blank" rel="noopener noreferrer" className="instagram-handle">@paperplaneproject.studio ></a>
          <div className="row mt-10">
            {instagramPosts.map((post, index) => (
              <div className="col-md-4 mb-3" key={index} onClick={() => openModal(post)}>
                <div className="focus-image">
                  <img src={post.url} alt={`Instagram Post ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedPost && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Instagram Post"
          className="instagram-modal"
          overlayClassName="instagram-modal-overlay"
        >
          <div className="instagram-modal-content">
            <img src={selectedPost.url} alt="Instagram Post" className="instagram-modal-image" />
            <p>{selectedPost.caption}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Home;
