import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaCheckCircle,
  FaLightbulb,
  FaRocket,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation(['projects', 'common']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  // Categories
  const categories = [
    { id: 'all', icon: 'grid' },
    { id: 'web', icon: 'code' },
    { id: 'automation', icon: 'cpu' }
  ];

  // Build projects data from translation
  const projectsData = t('projects:projects', { returnObjects: true }).map((project, index) => ({
    id: index + 1,
    title: project.title,
    category: project.category,
    categoryLabel: project.categoryLabel,
    shortDescription: project.shortDescription,
    problem: project.problem,
    solution: project.solution,
    impact: project.impact,
    technologies: project.technologies,
    infrastructureRole: project.infrastructureRole,
    images: project.images || [],
    githubUrl: project.githubUrl || null,
    liveUrl: project.liveUrl || null,
    featured: !!project.featured
  }));

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);
  const hasFeatured = featuredProjects.length > 0;
  const hasMore = hasFeatured && otherProjects.length > 0;

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  const categoryIcons = {
    grid: <FaServer />,
    code: <FaRocket />,
    cpu: <FaLightbulb />,
    server: <FaServer />
  };

  const renderProjectCard = (project) => (
    <Col key={project.id} lg={4} md={6} sm={12} className="mb-3 mb-md-4" data-aos="fade-up">
      <div
        className={`project-card ${project.featured ? 'featured' : ''}`}
        onClick={() => openProject(project)}
      >
        {project.images.length > 0 ? (
          <div className="project-image-wrapper">
            <img src={project.images[0]} alt={project.title} className="project-image" loading="lazy" />
          </div>
        ) : (
          <div className="project-icon-wrapper">
            <div className="project-icon">
              {categoryIcons[project.category === 'web' ? 'code' :
                             project.category === 'automation' ? 'cpu' : 'server']}
            </div>
          </div>
        )}

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
              {t('projects:viewDetails')} <FaExternalLinkAlt className="icon-small" />
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
  );

  return (
    <section id="projects" className="section section-dark">
      <Container>
        <div className="section-title">
          <h2>{t('projects:title')}</h2>
          <p className="section-subtitle">
            {t('projects:subtitle')}
          </p>
        </div>

        {/* Category Filters - Horizontal scroll em mobile */}
        <div className="category-filters mb-4">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <span className="filter-icon">{categoryIcons[category.icon]}</span>
              <span className="d-none d-sm-inline">{t(`projects:categories.${category.id}`)}</span>
              <span className="d-inline d-sm-none">
                {category.id === 'all' ? t(`projects:categories.${category.id}`) : 
                 category.id === 'web' ? 'Web' : 
                 category.id === 'automation' ? 'Auto' : 'Infra'}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {hasFeatured ? (
          <>
            <h3 className="projects-group-label">{t('projects:featuredLabel')}</h3>
            <Row className="projects-grid mb-4">
              {featuredProjects.map(project => renderProjectCard(project))}
            </Row>

            {showAll && otherProjects.length > 0 && (
              <>
                <h3 className="projects-group-label">{t('projects:moreLabel')}</h3>
                <Row className="projects-grid">
                  {otherProjects.map(project => renderProjectCard(project))}
                </Row>
              </>
            )}
          </>
        ) : (
          <Row className="projects-grid">
            {filteredProjects.map(project => renderProjectCard(project))}
          </Row>
        )}

        {hasMore && (
          <div className="show-more-wrapper">
            <button className="btn-outline-custom show-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <>{t('projects:showLess')} <FaChevronUp className="icon-small" /></>
              ) : (
                <>{t('projects:showMore')} <FaChevronDown className="icon-small" /></>
              )}
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>{t('projects:noProjects')}</p>
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

            {selectedProject.images.length > 0 && (
              <div className="modal-gallery">
                <img
                  src={selectedProject.images[activeImage]}
                  alt={`${selectedProject.title} - ${activeImage + 1}`}
                  className="modal-image"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="gallery-nav gallery-prev"
                      aria-label={t('projects:gallery.prev')}
                      onClick={() => setActiveImage((activeImage - 1 + selectedProject.images.length) % selectedProject.images.length)}
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      type="button"
                      className="gallery-nav gallery-next"
                      aria-label={t('projects:gallery.next')}
                      onClick={() => setActiveImage((activeImage + 1) % selectedProject.images.length)}
                    >
                      <FaChevronRight />
                    </button>

                    <div className="gallery-dots">
                      {selectedProject.images.map((_, index) => (
                        <button
                          type="button"
                          key={index}
                          className={`gallery-dot ${index === activeImage ? 'active' : ''}`}
                          aria-label={`${t('projects:gallery.goTo')} ${index + 1}`}
                          onClick={() => setActiveImage(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

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
                    {t('projects:modal.problem')}
                  </h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="context-item">
                  <h4>
                    <FaCheckCircle className="section-icon" />
                    {t('projects:modal.solution')}
                  </h4>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              {/* Impact & Results */}
              <div className="modal-section modal-section-highlight">
                <h4>
                  <FaRocket className="section-icon" />
                  {t('projects:modal.impact')}
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
                  <h4>{t('projects:modal.stack')}</h4>
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
                      {t('projects:modal.infrastructure')}
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
                    <FaGithub /> {t('projects:modal.github')}
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-accent-custom"
                  >
                    <FaExternalLinkAlt /> {t('projects:modal.live')}
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

