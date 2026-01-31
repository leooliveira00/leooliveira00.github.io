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
            Aplicações práticas que combinam desenvolvimento e conhecimento em infraestrutura
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
            <Col key={project.id} lg={4} md={6} className="mb-4" data-aos="fade-up">
              <div 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <FaCheckCircle /> Destaque
                  </div>
                )}

                <div className="project-icon-wrapper">
                  <div className="project-icon">
                    {categoryIcons[project.category === 'web' ? 'code' : 
                                   project.category === 'automation' ? 'cpu' : 'server']}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category-badge">
                    {project.categoryLabel}
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>

                  <div className="project-tech-preview">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge-small">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge-small more">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="project-action">
                    <span className="view-details">
                      Ver detalhes <FaExternalLinkAlt className="icon-small" />
                    </span>
                    
                    <div className="project-quick-links">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="quick-link"
                          title="GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="quick-link"
                          title="Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaRocket />
                        </a>
                      )}
                    </div>
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
              {/* Key Metrics Highlight */}
              {selectedProject.impact && selectedProject.impact.length > 0 && (
                <div className="key-metrics">
                  {selectedProject.impact.slice(0, 3).map((item, index) => {
                    // Extract numbers from impact strings for visual emphasis
                    const hasNumber = item.match(/(\d+[+%]?)/);
                    const isHighlightMetric = hasNumber || item.includes('Redução') || item.includes('colaboradores') || item.includes('agendamentos');
                    
                    return isHighlightMetric ? (
                      <div key={index} className="metric-card">
                        <div className="metric-icon">
                          {index === 0 ? <FaRocket /> : index === 1 ? <FaCheckCircle /> : <FaServer />}
                        </div>
                        <div className="metric-text">{item}</div>
                      </div>
                    ) : null;
                  }).filter(Boolean)}
                </div>
              )}

              {/* Context Section */}
              <div className="modal-context">
                <div className="context-item">
                  <h4>
                    <FaLightbulb className="section-icon" />
                    O Desafio
                  </h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="context-item">
                  <h4>
                    <FaCheckCircle className="section-icon" />
                    A Solução
                  </h4>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              {/* Impact & Results */}
              <div className="modal-section modal-section-highlight">
                <h4>
                  <FaRocket className="section-icon" />
                  Impacto e Resultados
                </h4>
                <ul className="impact-list">
                  {selectedProject.impact.map((item, index) => (
                    <li key={index}>
                      <FaCheckCircle className="impact-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Two Column Layout for Stack & Infrastructure */}
              <div className="modal-tech-section">
                <div className="tech-column">
                  <h4>Stack Tecnológica</h4>
                  <div className="tech-badges">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.infrastructureRole && (
                  <div className="infra-column">
                    <h4>
                      <FaServer className="section-icon" />
                      Infraestrutura
                    </h4>
                    <p className="infra-description">{selectedProject.infrastructureRole}</p>
                  </div>
                )}
              </div>

              {/* Action Links */}
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

