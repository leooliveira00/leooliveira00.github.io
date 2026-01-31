import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaCode,
  FaRocket,
  FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { name: 'Início', path: '/#home' },
      { name: 'Sobre', path: '/#about' },
      { name: 'Projetos', path: '/#projects' },
      { name: 'Habilidades', path: '/#skills' },
      { name: 'Contato', path: '/#contact' }
    ],
    social: [
      { 
        name: 'GitHub', 
        icon: <FaGithub />, 
        url: 'https://github.com/leooliveira00/' 
      },
      { 
        name: 'LinkedIn', 
        icon: <FaLinkedin />, 
        url: 'https://linkedin.com/in/leooliveira00/' 
      },
      { 
        name: 'Email', 
        icon: <FaEnvelope />, 
        url: 'mailto:lsousa2020@hotmail.com' 
      }
    ]
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <div className="brand-logo-footer">
                <FaCode className="brand-icon" />
                <span className="brand-text">Leonardo Sousa</span>
              </div>
              <p className="footer-description">
                Full Stack Developer com forte background em infraestrutura.
                Combinando desenvolvimento web moderno com expertise em DevOps, automação e cloud computing.
              </p>
              <div className="footer-badges">
                <span className="footer-badge">
                  <FaRocket /> 4+ anos em TI
                </span>
                <span className="footer-badge">
                  <FaCode /> React • Node.js • Python
                </span>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-section">
              <h4 className="footer-title">Navegação</h4>
              <ul className="footer-links">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <HashLink smooth to={link.path} className="footer-link">
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <div className="footer-section">
              <h4 className="footer-title">Redes Sociais</h4>
              <div className="footer-social">
                {footerLinks.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-section">
              <h4 className="footer-title">Entre em Contato</h4>
              <div className="footer-contact">
                <a href="mailto:lsousa2020@hotmail.com" className="footer-contact-link">
                  <FaEnvelope />
                  lsousa2020@hotmail.com
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Leonardo Sousa. Todos os direitos reservados.
            </p>
            <p className="footer-credits">
              Desenvolvido com <strong>React</strong> e <strong>Bootstrap</strong>
            </p>
          </div>

          <button 
            onClick={scrollToTop} 
            className="scroll-to-top"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp />
          </button>
        </div>
      </Container>

      <div className="footer-decoration">
        <div className="decoration-line"></div>
      </div>
    </footer>
  );
};

export default Footer;

