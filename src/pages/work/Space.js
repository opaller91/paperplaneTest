import React, { Component } from 'react'

class Space extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          url: '/images/home/projects/project1.png',
          name: 'Project 1',
          category: 'Categories Detail',
          location: 'Location Detail',
          year: 'Bangkok, 2024',

        },
        {
          url: '/images/home/projects/project2.png',
          name: 'Project 2',
          category: 'Categories Detail',
          location: 'Location Detail',
          year: '2024',
        },
        {
          url: '/images/home/projects/project3.png',
          name: 'Project 3',
          category: 'Categories Detail',
          location: 'Location Detail',
          year: '2024',
    
        },
        {
          url: '/images/home/projects/project4.png',
          name: 'Project 4',
          category: 'Categories Detail',
          location: 'Location Detail',
          year: '2024',
        },
        {
          url: '/images/home/projects/project5.png',
          name: 'Project 5',
          category: 'Categories Detail',
          location: 'Location Detail',
          year: '2024',
        },
        {
          url: '/images/home/projects/project6.png',
          name: 'Project 6',
          category: 'Categories Detail',
          location: 'Location Detail',
          year: '2024',
        },
      ],
      // activeFilter: 'ALL PROJECTS'
    };

  }


  // handleFilterClick = (filter) => {
  //   this.setState({ activeFilter: filter });
  // };

  render() {
    const { projects } = this.state;
    return (
//     <section id="projects">
//       <div className="flex jusify-center mb-2 mt-8 font-bold text-black text-4xl font-montserrat justify-center">
//         <p>{activeFilter}</p>
//       </div>
//     <div className="flex justify-center">
//         <p className='mb-16 flex font-medium text-black text-xl font-montserrat space-x-6'>
//           <a href="#" onClick={() => this.handleFilterClick('ALL PROJECTS')} className={`font-semibold text-black font-montserrat no-underline hover:underline ${activeFilter === 'ALL PROJECTS' ? 'text-blue-500' : ''}`}>All</a>
//           <b>|</b>
//           <a href="#" onClick={() => this.handleFilterClick('COCKTAIL BAR')} className={`font-semibold text-black font-montserrat no-underline hover:underline ${activeFilter === 'COCKTAIL BAR' ? 'text-blue-500' : ''}`}>Bar & Restaurant</a>
//           <b>|</b>
//           <a href="#" onClick={() => this.handleFilterClick('RESTAURANT')} className={`font-semibold text-black font-montserrat no-underline hover:underline ${activeFilter === 'RESTAURANT' ? 'text-blue-500' : ''}`}>Restaurant</a>
//         </p>
//     </div>
//     <div className="container grid grid-cols-3 gap-4">
//     {projects.map((project, index) => (
//       <div key={index} className="relative overflow-hidden group cursor-pointer"
//           onMouseEnter={() => this.setState({ hovered: true })}
//           onMouseLeave={() => this.setState({ hovered: false })}>
//         <div className="block relative w-full h-full">
//           <img
//             src={project.url}
//             alt={`Project ${index + 1}`}
//             className="object-cover w-447 h-723 transition duration-700 transform scale-100 group-hover:scale-105 "
//           />
//           <div className="absolute inset-0 hidden bg-black bg-opacity-50 group-hover:flex">
//             <div className="my-12 mx-7 text-left text-white font-montserrat transform transition duration-300 translate-x-full group-hover:translate-x-0">
//               <p className="text-lg font-light">Project</p>
//                 <h3 className="text-4xl font-bold group-hover:break-all mb-24">{project.name}</h3>
//                 <span 
//                 className={`block absolute left-0 bg-white h-1 transition-transform duration-1000 ${this.state.hovered ? 'w-full scale-100' : 'w-0 scale-0'}`}
//                 style={{ transformOrigin: this.state.hovered ? 'left' : 'right' }}
//                 ></span>
//                 <div className="pt-4 flex flex-cols-2">
//                   <div className='text-lg font-light'>Categories</div>
//                   <div className='ml-5 text-lg font-semibold group-hover:break-all'>{project.category}</div>
//                 </div>
//                 <div className="flex flex-cols-2">
//                   <div className='text-lg font-light'>Location</div>
//                   <div className='ml-10 text-lg font-semibold group-hover:break-all'>{project.location}</div>
//                 </div>
//                 <div className="flex flex-cols-2">
//                   <div className='text-lg font-light'>Year</div>
//                   <div className='ml-20 text-lg font-semibold'>{project.year}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     ))}
//   </div>
// </section>
<section id="workspace">
    <div className="flex overflow-x-scroll overflow-y-hidden space-x-9 w-8/12">
        {projects.map((project, index) => (
            <div
                key={index}
                className="relative flex-shrink-0 group cursor-pointer w-[480px] h-[881px]"
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
            >
                <div className="w-full h-full">
                    <img
                        src={project.url}
                        alt={`Project ${index + 1}`}
                        className="object-cover w-full h-full transition duration-700 transform scale-100 group-hover:scale-105"
                    />
                   <div className="absolute top-auto inset-0 hidden group-hover:flex justify-between my-2 mx-7 text-white font-montserrat group-hover:break-all">
                        <div>
                          <p className="m-0 text-xl font-semibold">{project.name}</p>
                          <p className='m-0 text-lg font-normal'>{project.location}</p>
                        </div>
                        <div className="m-0 font-normal text-lg">
                            &nbsp;
                            <p>{project.year}</p>
                        </div>
                </div>
                </div>
            </div>
        ))}
    </div>
</section>



    );
  }
}
  
  export default Space;