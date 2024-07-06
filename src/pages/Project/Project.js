import React, { Component } from 'react'
import { SlArrowUpCircle } from "react-icons/sl";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
            url: '/assets/images/TichucaH.png',
            name: 'Tichuca',
            category: 'Cocktail Bar',
            location: 'Bangkok',
            year: '2020',
  
          },
          {
            url: '/assets/images/PaperH.png',
            name: 'Paper Plane Project',
            category: 'Co-working Space / Live Music Bar / Night Club',
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
            location: 'Location Detail',
            year: '2020',
          },
          {
            url: '/assets/images/TahonaH.png',
            name: 'Tahona',
            category: 'Cocktail Bar',
            location: 'Bangkok',
            year: '2020',
          },
          {
            url: '/assets/images/SanctuaryH.png',
            name: 'Sanctuary',
            category: 'Cocktail Bar',
            location: 'Bangkok',
            year: '2020',
          },
      ],
      activeFilter: 'ALL PROJECTS'
    };

  }
  

  handleFilterClick = (filter) => {
    this.setState({ activeFilter: filter });
  };

    // Function to handle scroll to top
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    };

  render() {
    const { projects, activeFilter } = this.state;
    return (
    <section id="projects">
      <div className="flex jusify-center mb-2 font-bold text-black text-4xl font-montserrat justify-center">
        <p className='mt-20'>{activeFilter}</p>
      </div>
    <div className="flex justify-center">
        <p className='mb-16 flex font-medium text-black text-xl font-montserrat space-x-6'>
          <a href="#" onClick={() => this.handleFilterClick('ALL PROJECTS')} className={`font-semibold text-black font-montserrat no-underline hover:underline ${activeFilter === 'ALL PROJECTS' ? 'text-blue-500' : ''}`}>All</a>
          <b>|</b>
          <a href="#" onClick={() => this.handleFilterClick('COCKTAIL BAR')} className={`font-semibold text-black font-montserrat no-underline hover:underline ${activeFilter === 'COCKTAIL BAR' ? 'text-blue-500' : ''}`}>Cocktail Bar</a>
          <b>|</b>
          <a href="#" onClick={() => this.handleFilterClick('RESTAURANT')} className={`font-semibold text-black font-montserrat no-underline hover:underline ${activeFilter === 'RESTAURANT' ? 'text-blue-500' : ''}`}>Restaurant</a>
        </p>
    </div>
    <div className="container grid grid-cols-3 gap-4">
    {projects.map((project, index) => (
        <a href='/project-detail'>
      <div key={index} className="relative overflow-hidden group cursor-pointer"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}>
        <div className="block relative w-full h-full">
          <img
            src={project.url}
            alt={`Project ${index + 1}`}
            className="object-cover w-447 h-723 transition duration-700 transform scale-100 group-hover:scale-105 "
          />
          <div className="absolute inset-0 hidden bg-black bg-opacity-50 group-hover:flex">
            <div className="my-12 mx-7 text-left text-white font-montserrat transform transition duration-300 translate-x-full group-hover:translate-x-0">
              <p className="text-lg font-light">Project</p>
                <h3 className="text-4xl font-bold group-hover:break-all mb-24">{project.name}</h3>
                <span 
                className={`block absolute left-0 bg-white h-1 transition-transform duration-1000 ${this.state.hovered ? 'w-full scale-100' : 'w-0 scale-0'}`}
                style={{ transformOrigin: this.state.hovered ? 'left' : 'right' }}
                ></span>
                <div className="pt-4 flex flex-cols-2">
                  <div className='text-lg font-light'>Categories</div>
                  <div className='ml-5 text-lg font-semibold group-hover:break-all'>{project.category}</div>
                </div>
                <div className="flex flex-cols-2">
                  <div className='text-lg font-light'>Location</div>
                  <div className='ml-10 text-lg font-semibold group-hover:break-all'>{project.location}</div>
                </div>
                <div className="flex flex-cols-2">
                  <div className='text-lg font-light'>Year</div>
                  <div className='ml-20 text-lg font-semibold'>{project.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>
    ))}
  </div>
  {/* Scroll to Top Button */}
  <button onClick={this.scrollToTop} className=" text-white py-4 px-4 rounded-md mt-8 absolute right-8">
                    <SlArrowUpCircle style={{ fontSize: "2.5rem", fontWeight: "bold" ,color: '#000000'}} />
    </button>
</section>
    );
  }
}
  
  export default Work;