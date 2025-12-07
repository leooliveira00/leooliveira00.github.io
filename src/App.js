import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

