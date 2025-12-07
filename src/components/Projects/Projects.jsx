import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaServer, 
  FaCheckCircle,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
import { projectsData, categories } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const categoryIcons = {
    grid: <FaServer />,
    code: <FaRocket />,
    cpu: <FaLightbulb />,
    server: <FaServer />
  };

  return (
    <section id="projects" className="section section-dark">
      <Container>
        <div className="section-title">
          <h2>Projetos que Resolvem Problemas Reais</h2>
          <p className="section-subtitle">
            Soluções completas que combinam desenvolvimento e infraestrutura para gerar impacto mensurável
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{categoryIcons[category.icon]}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <Row className="projects-grid">
          {filteredProjects.map(project => (
            <Col key={project.id} lg={6} className="mb-4">
              <div className={`project-card card-dark ${project.featured ? 'featured' : ''}`}>
                {project.featured && (
                  <div className="featured-badge">
                    <FaCheckCircle /> Destaque
                  </div>
                )}

                <div className="project-header">
                  <div className="project-category-badge">
                    {project.categoryLabel}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-short-desc">{project.shortDescription}</p>
                </div>

                <div className="project-body">
                  <div className="project-problem">
                    <div className="problem-label">
                      <FaLightbulb className="problem-icon" />
                      <strong>Problema:</strong>
                    </div>
                    <p>{project.problem}</p>
                  </div>

                  <div className="project-solution">
                    <div className="solution-label">
                      <FaCheckCircle className="solution-icon" />
                      <strong>Solução:</strong>
                    </div>
                    <p>{project.solution}</p>
                  </div>

                  {project.infrastructureRole && (
                    <div className="project-infrastructure">
                      <div className="infra-label">
                        <FaServer className="infra-icon" />
                        <strong>Infraestrutura:</strong>
                      </div>
                      <p>{project.infrastructureRole}</p>
                    </div>
                  )}

                  <div className="project-tech">
                    <strong>Tecnologias:</strong>
                    <div className="tech-badges">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-footer">
                  <button 
                    className="btn-detail"
                    onClick={() => setSelectedProject(project)}
                  >
                    Ver Detalhes
                  </button>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Ver código no GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Ver projeto ao vivo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </Container>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            <div className="modal-header">
              <div className="project-category-badge">
                {selectedProject.categoryLabel}
              </div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-subtitle">{selectedProject.shortDescription}</p>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>
                  <FaLightbulb className="section-icon" />
                  Problema Identificado
                </h4>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h4>
                  <FaCheckCircle className="section-icon" />
                  Solução Implementada
                </h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="modal-section">
                <h4>
                  <FaRocket className="section-icon" />
                  Impacto e Resultados
                </h4>
                <ul className="impact-list">
                  {selectedProject.impact.map((item, index) => (
                    <li key={index}>
                      <FaCheckCircle className="impact-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.infrastructureRole && (
                <div className="modal-section">
                  <h4>
                    <FaServer className="section-icon" />
                    Papel da Infraestrutura
                  </h4>
                  <p>{selectedProject.infrastructureRole}</p>
                </div>
              )}

              <div className="modal-section">
                <h4>Stack Tecnológica</h4>
                <div className="tech-badges tech-badges-large">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary-custom"
                  >
                    <FaGithub /> Ver no GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-accent-custom"
                  >
                    <FaExternalLinkAlt /> Ver Projeto Ao Vivo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

