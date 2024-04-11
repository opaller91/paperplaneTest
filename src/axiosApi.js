import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Function to fetch projects
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        setProjects(response.data); // Set the projects in state
      } catch (error) {
        console.error('There was an error fetching the projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects na</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}: {project.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

