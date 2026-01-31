import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaServer } from 'react-icons/fa';
import { skillsData, skillLevels } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const iconMapping = {
    code: <FaCode />,
    server: <FaServer />
  };

  const renderSkillSection = (sectionKey, sectionData) => {
    return (
      <div key={sectionKey} className="skills-section">
        <div className="skills-section-header">
          <div className="section-icon-wrapper">
            {iconMapping[sectionData.icon]}
          </div>
          <h3 className="skills-section-title">{sectionData.title}</h3>
        </div>

        <div className="skills-groups">
          {sectionData.skills.map((group, groupIndex) => (
            <div key={groupIndex} className="skill-group">
              <h4 className="skill-group-name">{group.name}</h4>
              <div className="skill-items">
                {group.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span 
                          className="skill-status" 
                          style={{ color: skillLevels[skill.status].color }}
                        >
                          {skillLevels[skill.status].label}
                        </span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.status === 'learning' 
                            ? 'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)'
                            : 'linear-gradient(90deg, #10B981 0%, #34D399 100%)'
                        }}
                      >
                        <div className="skill-bar-shine"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Stack completo: desenvolvimento, infraestrutura e ferramentas
          </p>
        </div>

        {/* Legend */}
        <div className="skills-legend">
          {Object.entries(skillLevels).map(([key, value]) => (
            <div key={key} className="legend-item">
              <span 
                className="legend-dot" 
                style={{ background: value.color }}
              ></span>
              <span className="legend-label">{value.label}</span>
            </div>
          ))}
        </div>

        {/* Development Skills */}
        <Row className="mb-5">
          <Col lg={12}>
            {renderSkillSection('development', skillsData.development)}
          </Col>
        </Row>

        {/* Infrastructure Skills */}
        <Row>
          <Col lg={12}>
            {renderSkillSection('infrastructure', skillsData.infrastructure)}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

