import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Navigation.css';

const Navigation = () => {
  const { t } = useTranslation(['common', 'hero']);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={HashLink} smooth to="/#home" className="brand-logo">
          <FaCode className="brand-icon" />
          <span className="brand-text">
            <span className="brand-name">{t('hero:brandName')}</span>
            <span className="brand-tagline">{t('hero:brandTag')}</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-nav"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#home" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              {t('common:navigation.home')}
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#about" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              {t('common:navigation.about')}
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#projects" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              {t('common:navigation.projects')}
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#skills" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              {t('common:navigation.skills')}
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#contact" 
              onClick={closeMenu}
              className="nav-link-custom btn-contact"
            >
              {t('common:navigation.contact')}
            </Nav.Link>
            <div className="language-switcher-container">
              <LanguageSwitcher />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

