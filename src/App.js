import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Footer from './components/Footer';
import Studio from './pages/Studio/Studio';
import Career from './pages/Career/Career';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Space from './pages/work/Space';
import EditHome from './pages/Admin/EditHome';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome';
import EditStudio from './pages/Admin/EditStudio';
import EditCareer from './pages/Admin/EditCareer';
import EditContact from './pages/Admin/EditContact';
import Navbar from './components/Navbar/Navbar';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported first
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/projects/:type" element={<Project />} />
                <Route path="/projects/detail/:name" element={<ProjectDetail/>} /> {/* Updated */}
                <Route path="/studio" element={<Studio />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/home"
                       element={
                        <PrivateRoute>
                            <AdminHome />
                        </PrivateRoute>
                }/>
                <Route path="/editProject" 
                       element={
                        // <PrivateRoute>
                            <Space />
                        // </PrivateRoute>
                }/>
                <Route path="/editHome" 
                       element={
                        // <PrivateRoute>
                            <EditHome />
                        // </PrivateRoute>
                }/>
                <Route path="/editCareer" 
                       element={
                        // <PrivateRoute>
                            <EditCareer />
                        // </PrivateRoute>
                }/>
                <Route path="/editStudio" 
                       element={
                        // <PrivateRoute>
                            <EditStudio />
                        // </PrivateRoute>
                }/>
                <Route path="/editContact" 
                       element={
                        // <PrivateRoute>
                            <EditContact />
                        // </PrivateRoute>
                }/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;