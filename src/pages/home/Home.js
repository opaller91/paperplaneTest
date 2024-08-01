import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import { SlArrowRight } from "react-icons/sl";
import Modal from 'react-modal';


function Home() {
  const [focusedImage, setFocusedImage] = useState(null); // State to track focused image

  // Array of image sources
  const images = [
    '/assets/images/PaperPlaneProject.png',
    '/assets/images/PaperPlaneProject.png',
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
    <div className="bg-black text-white font-montserrat" style={{ padding: '5px', width: '100vw' }}>
      <img
        src='/assets/images/PaperPlaneProject.png'
        alt="Detail Image"
        className='home-header-image'
        style={{ width: '100%', objectFit: 'cover' }}
      />
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
        <button type="submit" className="btn-submit mt-8" variant="none">
          <span>STUDIO</span><SlArrowRight className="icon-right" />
        </button>
      </div>
      <div className="scrolling-logos mt-10">
        <div className="horizontal-logos logos-container">
          {['/assets/images/Tichuca.png', '/assets/images/PaperPlaneProject.png', '/assets/images/CR.png', '/assets/images/LoydsClub.png', '/assets/images/Tahona.png', '/assets/images/logo1.png', '/assets/images/logo2.png', '/assets/images/Fico.png'].map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} className="logo-image" />
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
              <p>Our team comprises specialized designers with profound expertise in architecture, interior</p>
              <p>design, and industrial design. We harness our extensive expertise to curate exceptional</p>
              <p>experiences, employing meticulous and detail-oriented approach to design.</p>
            </div>
            <div style={{ height: "200px" }}></div>
          </div>
          <div className="custom-width-right focus-images">
            <div className="row content-right">
              <div className="col-md-6 mb-3">
                <div className="focus-image">
                  <img src="/assets/images/LloyH.png" alt="Architectural Design" />
                </div>
                <p>ARCHITECTURAL DESIGN ></p>
              </div>
              <div className="col-md-6 mb-3">
                <div className="focus-image">
                  <img src="/assets/images/LloyH.png" alt="Interior Design" />
                </div>
                <p>INTERIOR DESIGN ></p>
              </div>
              <div className="col-md-12">
                <div className="focus-image">
                  <img src="/assets/images/LloyH.png" alt="Product Design" />
                </div>
                <p>PRODUCT DESIGN ></p>
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