import React, { useState } from 'react';
import './ProjectsGrid.scss';

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
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
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
            onClick={() => handleCardClick(project.id)}
          >
            {/* Card Front */}
            <div className="card-front">
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="view-more">
                    {expandedId === project.id ? '✕ Cerrar' : '+ Ver Detalle'}
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

      {/* Expanded Modal */}
      {expandedId && (
        <div
          className="project-modal-overlay"
          onClick={() => setExpandedId(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setExpandedId(null)}
            >
              ✕
            </button>

            {projects
              .filter((p) => p.id === expandedId)
              .map((project) => (
                <div key={project.id} className="modal-content">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="modal-image"
                  />

                  <div className="modal-details">
                    <div className="modal-header">
                      <h2>{project.title}</h2>
                      <p className="modal-description">{project.description}</p>
                    </div>

                    <div className="modal-body">
                      {project.content && (
                        <div
                          className="modal-text"
                          dangerouslySetInnerHTML={{ __html: project.content }}
                        />
                      )}
                    </div>

                    <div className="modal-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag large">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="modal-actions">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          Visitar Proyecto
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          Ver Código
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
