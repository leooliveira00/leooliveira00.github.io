import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

// Componentes críticos (carregam imediatamente)
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import SEO from './components/SEO/SEO';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

// Lazy load de componentes abaixo da dobra
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '200px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });

    // Update AOS on route change
    AOS.refresh();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SEO />
          <ScrollProgress />
          
          {/* Skip to content link for accessibility */}
          <a href="#main-content" className="skip-to-content">
            Pular para o conteúdo principal
          </a>
          
          <Navigation />
          <main id="main-content">
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
              <About />
              <Projects />
              <Skills />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

