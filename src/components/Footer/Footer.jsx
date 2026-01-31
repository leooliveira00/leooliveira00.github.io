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
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { name: t('common:navigation.home'), path: '/#home', key: 'home' },
      { name: t('common:navigation.about'), path: '/#about', key: 'about' },
      { name: t('common:navigation.projects'), path: '/#projects', key: 'projects' },
      { name: t('common:navigation.skills'), path: '/#skills', key: 'skills' },
      { name: t('common:navigation.contact'), path: '/#contact', key: 'contact' }
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
          <Col lg={4} md={6} sm={12} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <div className="brand-logo-footer mb-3">
                <FaCode className="brand-icon" />
                <span className="brand-text">{t('footer:brandName')}</span>
              </div>
              <p className="footer-description mb-3">
                {t('footer:description')}
              </p>
              <div className="footer-badges d-flex flex-wrap gap-2">
                <span className="footer-badge">
                  <FaRocket /> {t('footer:badges.experience')}
                </span>
                <span className="footer-badge">
                  <FaCode /> {t('footer:badges.stack')}
                </span>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={6} className="mb-4 mb-lg-0">
            <div className="footer-section">
              <h4 className="footer-title mb-3">{t('footer:navigationTitle')}</h4>
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

          <Col lg={2} md={6} sm={6} xs={6} className="mb-4 mb-lg-0">
            <div className="footer-section">
              <h4 className="footer-title mb-3">{t('footer:socialTitle')}</h4>
              <div className="footer-social d-flex gap-2">
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

          <Col lg={3} md={6} sm={12} className="d-none d-md-block">
            <div className="footer-section">
              <h4 className="footer-title mb-3">{t('footer:contactTitle')}</h4>
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
              © {currentYear} {t('footer:copyright')}
            </p>
            <p className="footer-credits">
              {t('footer:credits')} <strong>React</strong> {t('footer:creditsAnd')} <strong>Bootstrap</strong>
            </p>
          </div>

          <button 
            onClick={scrollToTop} 
            className="scroll-to-top"
            aria-label={t('footer:backToTop')}
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

