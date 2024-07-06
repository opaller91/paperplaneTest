
import './App.css';
import { Route, Routes } from "react-router-dom";
import $ from 'jquery';
import Home from './pages/Home/Home';
import Work from './pages/Work/Space';
import Studio from './pages/Studio/StudioComponent';
import Career from './pages/Career/CareerComponent';
import ContactUs from './pages/ContactUs/ContactUsComponent';
import ProjectDetail from './pages/ProjectDetail/ProjectDetailComponent';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homeData: {}
    };
  }

  getHomeData() {
    $.ajax({
      url: "/js/HomeData.json", 
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ homeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getHomeData();
  }

 render() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home data={this.state.homeData} />} />
        <Route path="/work" element={<Work />} />
        <Route path="/aboutUs" element={<Studio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project-detail/1" element={<ProjectDetail />} />
        <Route path="/project-detail/2" element={<ProjectDetail />} />
        <Route path="/project-detail/3" element={<ProjectDetail />} />
        <Route path="/project-detail/4" element={<ProjectDetail />} />
     </Routes>
    </div>

// import React from 'react';
// import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Studio from './features/Studio/StudioComponent';
// import Career from './features/Career/CareerComponent';
// import ContactUs from './features/ContactUs/ContactUsComponent';
// import Home from './features/Home/HomeComponent';
// import ProjectDetail from './features/ProjectDetail/ProjectDetailComponent';
// import Project from './features/Project/Project';
// import Projects from './axiosApi';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported first
// import ScrollToTop from './components/ScrollToTop';
// import './App.css';

// function App() {

//   return (
//     <Router>
//     {/* <div className="App"> */}
//       <ScrollToTop />
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/project" element={<Project/>} />
//         <Route path="/project-detail" element={<ProjectDetail />} />
//         <Route path="/studio" element={<Studio />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//       </Routes>
//       {/* <Footer /> */}
//       {/* Conditional rendering of Navbar based on route */}
     
//       {/* <Navbar />
//       <Routes>
//         <Route path="/studio" element={<Studio />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//       </Routes> */}

//       {/* <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div>
//         <h1>My Projects</h1>
//         <Projects />
//       </div>
      
//       <div>
//         <button className="btn btn-primary">My Bootstrap Button</button>
//         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tail</button>
//       </div>
//     </div> */}
//     </Router>
  );
 }
}

export default App;
