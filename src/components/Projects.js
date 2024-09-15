import React, { useState } from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, name: 'Project 1', description: 'This is a project description about Project 1', image: project1 },
    { id: 2, name: 'Project 2', description: 'This is a project description about Project 2', image: project2 },
    { id: 3, name: 'Project 3', description: 'This is a project description about Project 3', image: project3 },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (

<section className="projects" id="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    {projects.map((project) => (
      <div key={project.id} className="project-card">
        <div><img src={project.image} alt={project.name} /></div>
        <div className="project-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <button onClick={() => openModal(project)}>View Project</button>
        </div>
      </div>
    ))}
  </div>


      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.name} />
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
