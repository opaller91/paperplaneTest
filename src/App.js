import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Studio from './pages/Studio/Studio';
import Career from './pages/Career/Career';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Navbar from './components/Navbar/Navbar';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported first
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/projects/:type" element={<Project />} />
                <Route path="/projects/detail/:displayname" element={<ProjectDetail/>} /> {/* Updated */}
                <Route path="/studio" element={<Studio />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;