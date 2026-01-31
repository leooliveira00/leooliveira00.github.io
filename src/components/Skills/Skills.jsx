import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaServer } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation('skills');
  
  const iconMapping = {
    code: <FaCode />,
    server: <FaServer />
  };

  // Skill levels
  const skillLevels = {
    proficient: {
      label: t('legend.proficient'),
      color: '#10B981'
    },
    learning: {
      label: t('legend.learning'),
      color: '#3B82F6'
    }
  };

  // Build skills data from translation
  const skillsData = {
    development: {
      title: t('sections.development'),
      icon: 'code',
      skills: [
        {
          name: t('groups.frontend'),
          items: [
            { name: t('skills.react'), level: 75, status: 'proficient' },
            { name: t('skills.javascript'), level: 80, status: 'proficient' },
            { name: t('skills.html5css3'), level: 85, status: 'proficient' },
            { name: t('skills.bootstrap'), level: 75, status: 'proficient' }
          ]
        },
        {
          name: t('groups.backendDatabase'),
          items: [
            { name: t('skills.nodeExpress'), level: 70, status: 'proficient' },
            { name: t('skills.python'), level: 85, status: 'proficient' },
            { name: t('skills.restfulAPIs'), level: 75, status: 'proficient' },
            { name: t('skills.postgresql'), level: 70, status: 'proficient' },
            { name: t('skills.mssql'), level: 80, status: 'proficient' }
          ]
        }
      ]
    },
    infrastructure: {
      title: t('sections.infrastructure'),
      icon: 'server',
      skills: [
        {
          name: t('groups.automationCICD'),
          items: [
            { name: t('skills.pythonAutomation'), level: 85, status: 'proficient' },
            { name: t('skills.apacheAirflow'), level: 70, status: 'proficient' },
            { name: t('skills.bashScripting'), level: 75, status: 'proficient' },
            { name: t('skills.gitGitHub'), level: 80, status: 'proficient' }
          ]
        },
        {
          name: t('groups.serversContainers'),
          items: [
            { name: t('skills.dockerCompose'), level: 75, status: 'proficient' },
            { name: t('skills.linuxAdmin'), level: 80, status: 'proficient' },
            { name: t('skills.windowsServer'), level: 85, status: 'proficient' }
          ]
        },
        {
          name: t('groups.networkingMonitoring'),
          items: [
            { name: t('skills.tcpipNetworking'), level: 80, status: 'proficient' },
            { name: t('skills.monitoringLogs'), level: 75, status: 'learning' }
          ]
        }
      ]
    }
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
          <h2>{t('title')}</h2>
          <p className="section-subtitle">
            {t('subtitle')}
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

