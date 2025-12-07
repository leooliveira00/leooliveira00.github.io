import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { 
  FaServer, 
  FaCode, 
  FaBox, 
  FaLightbulb, 
  FaBullseye,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { timelineData } from '../../data/timelineData';
import './Timeline.css';

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const iconMapping = {
    server: <FaServer />,
    code: <FaCode />,
    box: <FaBox />,
    zap: <FaLightbulb />,
    target: <FaBullseye />
  };

  const typeColors = {
    infrastructure: { bg: '#3B82F6', label: 'Infraestrutura' },
    transition: { bg: '#8B5CF6', label: 'Transição' },
    development: { bg: '#10B981', label: 'Desenvolvimento' },
    future: { bg: '#F59E0B', label: 'Futuro' }
  };

  const toggleExpand = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="timeline" className="section section-dark">
      <Container>
        <div className="section-title">
          <h2>Trajetória Profissional</h2>
          <p className="section-subtitle">
            A evolução de infraestrutura a full stack developer
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${item.current ? 'current' : ''} ${expandedItems.includes(item.id) ? 'expanded' : ''}`}
            >
              <div className="timeline-connector">
                <div 
                  className="timeline-dot"
                  style={{ background: typeColors[item.type].bg }}
                >
                  {iconMapping[item.icon]}
                </div>
                {index < timelineData.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              <div className="timeline-content card-dark">
                {item.current && (
                  <div className="current-badge">
                    <span className="badge-pulse"></span>
                    Atual
                  </div>
                )}

                <div className="timeline-header">
                  <div className="timeline-year">{item.year}</div>
                  <div 
                    className="timeline-type-badge"
                    style={{ background: typeColors[item.type].bg }}
                  >
                    {typeColors[item.type].label}
                  </div>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>

                <div className="timeline-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="timeline-skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <button 
                  className="timeline-toggle"
                  onClick={() => toggleExpand(item.id)}
                >
                  {expandedItems.includes(item.id) ? (
                    <>
                      <FaChevronUp /> Ocultar conquistas
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> Ver conquistas
                    </>
                  )}
                </button>

                {expandedItems.includes(item.id) && (
                  <div className="timeline-achievements">
                    <h4>Principais Conquistas:</h4>
                    <ul>
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>
                          <FaLightbulb className="achievement-icon" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-summary">
          <div className="summary-content">
            <h3>A Jornada Completa</h3>
            <p>
              De <strong>infraestrutura</strong> a <strong>automação</strong> e 
              finalmente <strong>desenvolvimento full stack</strong>. Cada etapa 
              construiu uma base sólida que me diferencia no mercado, permitindo 
              criar soluções que funcionam perfeitamente do código à produção.
            </p>
            <div className="summary-stats">
              <div className="summary-stat">
                <div className="stat-value">4+</div>
                <div className="stat-label">Anos em TI</div>
              </div>
              <div className="summary-stat">
                <div className="stat-value">3</div>
                <div className="stat-label">Áreas Dominadas</div>
              </div>
              <div className="summary-stat">
                <div className="stat-value">∞</div>
                <div className="stat-label">Aprendizado Contínuo</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;

