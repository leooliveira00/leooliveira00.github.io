import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
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
            <span className="brand-name">Leonardo Sousa</span>
            <span className="brand-tagline">Desenvolvedor Full Stack</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-nav"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#home" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              Início
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#about" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#projects" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              Projetos
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#skills" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              Habilidades
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#timeline" 
              onClick={closeMenu}
              className="nav-link-custom"
            >
              Trajetória
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              smooth 
              to="/#contact" 
              onClick={closeMenu}
              className="nav-link-custom btn-contact"
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

