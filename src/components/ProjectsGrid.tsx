import React, { useState } from 'react';
import './ProjectsGrid.scss';
import OptimizedImage from './OptimizedImage';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  github?: string;
  year: number;
  status: string;
  content?: string;
  detailPage?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  const handleCardClick = (detailPage?: string) => {
    if (detailPage) {
      window.location.href = detailPage;
    }
  };

  return (
    <>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleCardClick(project.detailPage)}
            style={{ cursor: project.detailPage ? 'pointer' : 'default' }}
          >
            {/* Card Front */}
            <div className="card-front">
              <div className="card-image-wrapper">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="card-overlay">
                  <span className="view-more">
                    {project.detailPage ? '+ Ver Detalle' : ''}
                  </span>
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span className="card-status">{project.status}</span>
                </div>

                <p className="card-description">{project.description}</p>

                <div className="card-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <span className="card-year">{project.year}</span>
                  <div className="card-links">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon"
                        title="Visitar proyecto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🌐
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon"
                        title="Ver en GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        💻
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
