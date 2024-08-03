import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Studio from './pages/Studio/Studio';
import Career from './pages/Career/Career';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Project from './pages/Project/Project';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported first
import './App.css';

function AppContent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const location = useLocation();
  const isHome = (location.pathname === '/home' || location.pathname === '/project-detail') ;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className={isHome ? '' : 'content-below-navbar'}>
      <Navbar handleFilterClick={handleFilterClick} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project activeFilter={activeFilter} />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;