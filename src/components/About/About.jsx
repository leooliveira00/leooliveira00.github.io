import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaServer, 
  FaCode, 
  FaRocket, 
  FaCheckCircle,
  FaCalendar,
  FaBriefcase,
  FaLayerGroup,
  FaAward
} from 'react-icons/fa';
import { careerStats } from '../../data/timelineData';
import './About.css';

const About = () => {
  const advantages = [
    {
      icon: <FaRocket />,
      title: "Visão End-to-End",
      description: "Entendo todo o ciclo da aplicação, do código à produção, garantindo soluções completas e escaláveis"
    },
    {
      icon: <FaServer />,
      title: "Performance & Escalabilidade",
      description: "Experiência em infraestrutura permite desenvolver pensando em otimização e crescimento desde o início"
    },
    {
      icon: <FaCode />,
      title: "Automação & DevOps",
      description: "Implemento CI/CD, automações e práticas DevOps que aceleram o desenvolvimento e reduzem erros"
    }
  ];

  const iconMapping = {
    calendar: <FaCalendar />,
    briefcase: <FaBriefcase />,
    layers: <FaLayerGroup />,
    award: <FaAward />
  };

  return (
    <section id="about" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>De Infraestrutura a Full Stack</h2>
          <p className="section-subtitle">
            Uma jornada que agrega valor único ao desenvolvimento
          </p>
        </div>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <div className="about-label">
                <FaCheckCircle className="label-icon" />
                Minha História
              </div>
              
              <h3 className="about-heading">
                De Infraestrutura a <span className="gradient-text">Full Stack Developer</span>
              </h3>
              
              <p className="about-text">
                Com <strong>mais de 4 anos de experiência em infraestrutura de TI</strong> 
                (servidores, redes, virtualização, containers), atuo como 
                desenvolvedor full stack - e essa combinação é meu maior diferencial.
              </p>
              
              <p className="about-text">
                Minha experiência anterior em infraestrutura me dá uma 
                <strong> perspectiva diferente no desenvolvimento</strong>. Enquanto estou 
                aprendendo a construir aplicações web, já entendo conceitos de deploy, 
                performance e escalabilidade que muitos júniores ainda não conhecem.
              </p>
              
              <p className="about-text">
                Atualmente <strong>aprendendo JavaScript, React e Node.js na prática</strong>, 
                aplicando meu conhecimento em infraestrutura para criar soluções 
                que funcionam bem tanto no código quanto em produção.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <FaServer className="highlight-icon" />
                  <div>
                    <h4>Infraestrutura Sólida</h4>
                    <p>4+ anos com servidores, redes, Docker e virtualização</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h4>Desenvolvimento em Evolução</h4>
                    <p>Aprendendo React, Node.js e aplicando Python em projetos reais</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-card card-custom">
                  <div className="advantage-icon">{advantage.icon}</div>
                  <h4 className="advantage-title">{advantage.title}</h4>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="stats-row">
          {careerStats.map((stat, index) => (
            <Col key={index} xs={6} md={3} className="mb-4 mb-md-0">
              <div className="stat-card">
                <div className="stat-icon">
                  {iconMapping[stat.icon]}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="elevator-pitch">
          <div className="pitch-content">
            <h3 className="pitch-title">Por que minha experiência importa?</h3>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Entendo infraestrutura</strong> - sei como aplicações funcionam em produção
            </p>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Facilidade com debug</strong> - experiência com logs, monitoramento e troubleshooting
            </p>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Conheço automação</strong> - familiaridade com scripts e processos automatizados
            </p>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Perspectiva ampla</strong> - vejo além do código, incluindo deploy e operação
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

