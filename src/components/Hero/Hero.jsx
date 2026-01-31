import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiDocker, 
  SiJavascript, 
  SiLinux 
} from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation('hero');
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Linux', icon: <SiLinux />, color: '#FCC624' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="hero-badge animate-fade-in">
              <span className="badge-dot"></span>
              {t('badge')}
            </div>
            
            <h1 className="hero-title animate-fade-in-up">
              {t('title')}
            </h1>
            
            <p className="hero-subtitle animate-fade-in-up">
              {t('subtitle')}
              <br />
              {t('subtitle2')}
            </p>

            <div className="hero-tech-stack animate-fade-in-up">
              <span className="tech-label">{t('techLabel')}</span>
              <div className="tech-icons">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={`tech-icon ${index === currentTech ? 'active' : ''}`}
                    style={{ color: tech.color }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-cta animate-fade-in-up">
              <HashLink smooth to="/#projects" className="btn-primary-custom">
                {t('cta.projects')}
              </HashLink>
              <HashLink smooth to="/#contact" className="btn-outline-custom">
                {t('cta.contact')}
              </HashLink>
            </div>

            <div className="hero-social animate-fade-in-up">
              <a 
                href="https://github.com/leooliveira00/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/leooliveira00/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:lsousa2020@hotmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>

          <Col lg={6} className="hero-visual">
            <div className="hero-illustration animate-float">
              <div className="illustration-container">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-buttons">
                      <span className="btn-close"></span>
                      <span className="btn-minimize"></span>
                      <span className="btn-maximize"></span>
                    </div>
                    <div className="window-title">developer.js</div>
                  </div>
                  <div className="window-content">
                    <div className="code-line">
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-variable">developer</span> = {'{'};
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">name</span>: 
                      <span className="code-string">"Leonardo Sousa"</span>,
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">role</span>: 
                      <span className="code-string">"Full Stack"</span>,
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">experience</span>: 
                      <span className="code-string">"Infra + Dev"</span>,
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">skills</span>: [
                      <span className="code-string">"React"</span>,
                      <span className="code-string">"Node.js"</span>,
                      <span className="code-string">"Python"</span>]
                    </div>
                    <div className="code-line">{'};'}</div>
                  </div>
                </div>
                
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <SiReact className="float-icon" />
                  </div>
                  <div className="floating-card card-2">
                    <SiDocker className="float-icon" />
                  </div>
                  <div className="floating-card card-3">
                    <SiPython className="float-icon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <HashLink smooth to="/#about" className="scroll-indicator">
          <FaChevronDown className="scroll-icon" />
          <span>{t('scroll')}</span>
        </HashLink>
      </Container>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;

