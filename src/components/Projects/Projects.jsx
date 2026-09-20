import React, { useState, useEffect } from 'react';
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
  FaChevronRight,
  FaExpand
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation(['projects', 'common']);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
    setLightboxOpen(false);
  };

  const stepImage = (images, direction) => {
    setActiveImage((prev) => (prev + direction + images.length) % images.length);
  };

  // Close the lightbox with Escape, and let arrow keys step through images while it's open
  useEffect(() => {
    if (!lightboxOpen || !selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') stepImage(selectedProject.images, 1);
      if (e.key === 'ArrowLeft') stepImage(selectedProject.images, -1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedProject]);

  // Portrait (mobile) screenshots get a phone-frame treatment instead of being cropped like the desktop shots
  const isMobileShot = (src) => /mobile/i.test(src);

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
    myRole: project.myRole || [],
    images: project.images || [],
    githubUrl: project.githubUrl || null,
    liveUrl: project.liveUrl || null,
    featured: !!project.featured,
    inDevelopment: !!project.inDevelopment,
    disclaimer: project.disclaimer || null
  }));

  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);
  const hasFeatured = featuredProjects.length > 0;
  const hasMore = hasFeatured && otherProjects.length > 0;

  const categoryIcons = {
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
        {project.inDevelopment && (
          <div className="in-development-badge">{t('projects:inDevelopmentLabel')}</div>
        )}

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
            {projectsData.map(project => renderProjectCard(project))}
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
      </Container>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            {selectedProject.images.length > 0 && (
              <div className={`modal-gallery ${isMobileShot(selectedProject.images[activeImage]) ? 'is-mobile-shot' : ''}`}>
                <img
                  src={selectedProject.images[activeImage]}
                  alt={`${selectedProject.title} - ${activeImage + 1}`}
                  className="modal-image"
                  onClick={() => setLightboxOpen(true)}
                />
                <div className="expand-hint" onClick={() => setLightboxOpen(true)}>
                  <FaExpand />
                </div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="gallery-nav gallery-prev"
                      aria-label={t('projects:gallery.prev')}
                      onClick={() => stepImage(selectedProject.images, -1)}
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      type="button"
                      className="gallery-nav gallery-next"
                      aria-label={t('projects:gallery.next')}
                      onClick={() => stepImage(selectedProject.images, 1)}
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
              <div className="modal-badges">
                <div className="project-category-badge">
                  {selectedProject.categoryLabel}
                </div>
                {selectedProject.inDevelopment && (
                  <div className="in-development-badge static">{t('projects:inDevelopmentLabel')}</div>
                )}
              </div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-subtitle">{selectedProject.shortDescription}</p>
              {selectedProject.disclaimer && (
                <p className="modal-disclaimer">{selectedProject.disclaimer}</p>
              )}
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
                {selectedProject.myRole.length > 0 && (
                  <div className="role-column">
                    <h4>{t('projects:modal.myRole')}</h4>
                    <div className="tech-badges">
                      {selectedProject.myRole.map((role, index) => (
                        <span key={index} className="tech-badge">{role}</span>
                      ))}
                    </div>
                  </div>
                )}

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

      {/* Fullscreen image lightbox, rendered above the project modal */}
      {lightboxOpen && selectedProject && (
        <div className="image-lightbox" onClick={() => setLightboxOpen(false)}>
          <button
            type="button"
            className="lightbox-close"
            aria-label={t('projects:modal.close')}
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>

          <img
            src={selectedProject.images[activeImage]}
            alt={`${selectedProject.title} - ${activeImage + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          {selectedProject.images.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-nav gallery-prev lightbox-nav"
                aria-label={t('projects:gallery.prev')}
                onClick={(e) => { e.stopPropagation(); stepImage(selectedProject.images, -1); }}
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                className="gallery-nav gallery-next lightbox-nav"
                aria-label={t('projects:gallery.next')}
                onClick={(e) => { e.stopPropagation(); stepImage(selectedProject.images, 1); }}
              >
                <FaChevronRight />
              </button>

              <div className="gallery-dots lightbox-dots" onClick={(e) => e.stopPropagation()}>
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
    </section>
  );
};

export default Projects;

