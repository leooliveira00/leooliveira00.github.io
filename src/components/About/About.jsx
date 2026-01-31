import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaServer, 
  FaCode, 
  FaRocket, 
  FaCheckCircle
} from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>Sobre Mim</h2>
          <p className="section-subtitle">
            Combinando experiência em infraestrutura com desenvolvimento moderno
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={8} className="mx-auto">
            <div className="about-content">
              <div className="about-label">
                <FaCheckCircle className="label-icon" />
                Minha Jornada
              </div>
              
              <h3 className="about-heading">
                De Infraestrutura a <span className="gradient-text">Full Stack Developer</span>
              </h3>
              
              <p className="about-text">
                Com mais de <strong>4 anos de experiência em TI</strong>, atuando em 
                <strong> multinacional do setor de dispositivos médicos</strong>, comecei 
                minha carreira em infraestrutura (servidores, redes, virtualização, containers) 
                e hoje atuo como desenvolvedor full stack.
              </p>
              
              <p className="about-text">
                Essa trajetória me dá uma <strong>perspectiva única no desenvolvimento</strong>: 
                entendo todo o ciclo de vida das aplicações, desde o código até a produção. 
                Enquanto desenvolvo com <strong>React, Node.js e Python</strong>, aplico 
                conhecimentos de infraestrutura para criar soluções robustas, escaláveis e 
                bem estruturadas.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <FaServer className="highlight-icon" />
                  <div>
                    <h4>Base Sólida em Infraestrutura</h4>
                    <p>4+ anos com servidores, Docker, automação e DevOps</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h4>Desenvolvimento Full Stack</h4>
                    <p>React, Node.js, Python e bancos de dados</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaRocket className="highlight-icon" />
                  <div>
                    <h4>Visão End-to-End</h4>
                    <p>Do código à produção, pensando em performance e escalabilidade</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
