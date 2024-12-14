import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'residential', 'commercial', 'industrial'];

  const projects = [
    {
      title: "Modern Bathroom Renovation",
      category: "residential",
      image: "/images/projects/bathroom.jpg",
      description: "Complete bathroom transformation with premium porcelain tiles"
    },
    {
      title: "Corporate Office Flooring",
      category: "commercial",
      image: "/images/projects/office.jpg",
      description: "Large-scale commercial flooring project for a corporate client"
    },
    {
      title: "Industrial Kitchen Tiling",
      category: "industrial",
      image: "/images/projects/kitchen.jpg",
      description: "Heavy-duty tiling solution for a commercial kitchen"
    },
    {
      title: "Luxury Home Flooring",
      category: "residential",
      image: "/images/projects/luxury-home.jpg",
      description: "Premium marble tiling for a luxury residence"
    },
    {
      title: "Shopping Mall Installation",
      category: "commercial",
      image: "/images/projects/mall.jpg",
      description: "Large-format tiling for a shopping mall common area"
    },
    {
      title: "Factory Floor Restoration",
      category: "industrial",
      image: "/images/projects/factory.jpg",
      description: "Durable industrial tiling solution with chemical resistance"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Explore our portfolio of successful tiling projects across New Zealand
        </p>

        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-category">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;