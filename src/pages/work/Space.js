import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

// Define withNavigation HOC
const withNavigation = (Component) => {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
};

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
        };
    }

    handleProjectClick = (index) => {
      const { navigate, closeToggle } = this.props;
        navigate(`/project-detail/${index + 1}`); // Navigate to the appropriate project detail page
        closeToggle();
    };

    render() {
        const { projects } = this.state;
        return (
            <section id="workspace">
                <div className="flex overflow-x-scroll overflow-y-hidden space-x-9 w-8/12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 group cursor-pointer w-[480px] h-[881px]"
                            onClick={() => this.handleProjectClick(index)}
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
                                        <p className="m-0 text-lg font-normal">{project.location}</p>
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

export default withNavigation(Space);
