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
                (servidores, redes, virtualização, containers), estou em transição para 
                desenvolvimento full stack - e essa combinação é meu maior diferencial.
              </p>
              
              <p className="about-text">
                Minha experiência anterior não ficou para trás. Ela me permite 
                <strong> criar aplicações pensando em todo o ecossistema</strong>: performance, 
                escalabilidade, segurança e automação desde o primeiro commit.
              </p>
              
              <p className="about-text">
                Atualmente focado em <strong>JavaScript, React e Node.js</strong>, 
                aplico princípios de infraestrutura e DevOps para construir 
                soluções modernas, eficientes e prontas para crescer.
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
                    <h4>Desenvolvimento Moderno</h4>
                    <p>React, Node.js, Python e tecnologias atuais</p>
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
              <strong>Desenvolvo pensando em escalabilidade</strong> - sei o que funciona em produção
            </p>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Debug mais rápido</strong> - entendo problemas de performance e infraestrutura
            </p>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Automatizo processos</strong> - economizo tempo com CI/CD e scripts
            </p>
            <p className="pitch-text">
              <FaCheckCircle className="pitch-icon" />
              <strong>Visão completa</strong> - da arquitetura do código à arquitetura do servidor
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

