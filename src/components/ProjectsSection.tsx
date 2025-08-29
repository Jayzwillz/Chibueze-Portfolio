import React from 'react';

interface Project {
  name: string;
  client: string;
  duration: string;
  team: string;
  description: string;
  technologies: string[];
  impact: string;
  challenges: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, idx) => (
        <div key={idx} className="project-item">
          <h4>{project.name}</h4>
          <div className="project-meta">
            <span><strong>Client:</strong> {project.client}</span> • 
            <span><strong>Duration:</strong> {project.duration}</span> • 
            <span><strong>Team Size:</strong> {project.team}</span>
          </div>
          <p>{project.description}</p>
          <div className="project-details">
            <div><strong>Technologies:</strong> {project.technologies.join(', ')}</div>
            <div><strong>Impact:</strong> {project.impact}</div>
            <div><strong>Key Challenges:</strong> {project.challenges}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
