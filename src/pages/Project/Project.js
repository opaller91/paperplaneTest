import React, { useState, useEffect } from 'react';
import { SlArrowUpCircle } from 'react-icons/sl';
import { useLocation } from 'react-router-dom';
import './Project.css'; // Import a CSS file for styles

const Work = ({ activeFilter }) => {
  const [hovered, setHovered] = useState(null);
  const projects = [
    {
      url: '/assets/images/TichucaH.png',
      name: 'Tichuca',
      category: 'Architecture',
      location: 'Bangkok',
      year: '2020',
    },
    {
      url: '/assets/images/PaperH.png',
      name: 'Paper Plane Project',
      category: 'Interior',
      location: 'Bangkok',
      year: '2020',
    },
    {
      url: '/assets/images/LloyH.png',
      name: 'Lloyd Club',
      category: 'Cocktail Bar',
      location: 'Bangkok',
      year: '2020',
    },
    {
      url: '/assets/images/GirH.png',
      name: 'Gir',
      category: 'Cocktail Bar',
      location: 'Bangkok',
      year: '2020',
    },
    {
      url: '/assets/images/TahonaH.png',
      name: 'Tahona',
      category: 'Object',
      location: 'Bangkok',
      year: '2020',
    },
    {
      url: '/assets/images/SanctuaryH.png',
      name: 'Sanctuary',
      category: 'Object',
      location: 'Bangkok',
      year: '2020',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  };

  return (
    <section id="projects">
      <div className="mt-20 container grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <a href="/project-detail" key={index}>
            <div
              className="relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={project.url}
                alt={`Project ${index + 1}`}
                className="object-cover project-image transition duration-700 transform scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 hidden bg-black bg-opacity-50 group-hover:flex">
                <div className="my-12 mx-7 text-left text-white font-montserrat transform transition duration-300 translate-x-full group-hover:translate-x-0">
                  <p className="text-lg font-light">Project</p>
                  <h3 className="text-4xl font-bold group-hover:break-all mb-24">
                    {project.name}
                  </h3>
                  <span
                    className={`block absolute left-0 bg-white h-1 transition-transform duration-1000 ${
                      hovered === index ? 'w-full scale-100' : 'w-0 scale-0'
                    }`}
                    style={{
                      transformOrigin: hovered === index ? 'left' : 'right',
                    }}
                  ></span>
                  <div className="pt-4 flex flex-cols-2">
                    <div className="text-lg font-light">Categories</div>
                    <div className="ml-5 text-lg font-semibold group-hover:break-all">
                      {project.category}
                    </div>
                  </div>
                  <div className="flex flex-cols-2">
                    <div className="text-lg font-light">Location</div>
                    <div className="ml-10 text-lg font-semibold group-hover:break-all">
                      {project.location}
                    </div>
                  </div>
                  <div className="flex flex-cols-2">
                    <div className="text-lg font-light">Year</div>
                    <div className="ml-20 text-lg font-semibold">{project.year}</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="text-lg">{project.year}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="text-white py-4 px-4 rounded-md mt-8 absolute right-8"
      >
        <SlArrowUpCircle
          style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000000' }}
        />
      </button>
    </section>
  );
};

export default Work;