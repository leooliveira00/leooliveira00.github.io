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
            { name: t('skills.reactTypescript'), status: 'proficient' },
            { name: t('skills.javascript'), status: 'proficient' },
            { name: t('skills.html5css3'), status: 'proficient' },
            { name: t('skills.bootstrapTailwind'), status: 'proficient' }
          ]
        },
        {
          name: t('groups.backendDatabase'),
          items: [
            { name: t('skills.nodeExpress'), status: 'proficient' },
            { name: t('skills.pythonFastapi'), status: 'proficient' },
            { name: t('skills.ormPrismaSqlalchemy'), status: 'proficient' },
            { name: t('skills.databases'), status: 'proficient' },
            { name: t('skills.apiAuth'), status: 'proficient' }
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
            { name: t('skills.airflowAutomation'), status: 'proficient' },
            { name: t('skills.gitCicd'), status: 'proficient' },
            { name: t('skills.bashScripting'), status: 'proficient' }
          ]
        },
        {
          name: t('groups.serversContainers'),
          items: [
            { name: t('skills.dockerCompose'), status: 'proficient' },
            { name: t('skills.traefik'), status: 'proficient' },
            { name: t('skills.serversOS'), status: 'proficient' }
          ]
        },
        {
          name: t('groups.networkingMonitoring'),
          items: [
            { name: t('skills.networking'), status: 'proficient' },
            { name: t('skills.monitoringLogs'), status: 'learning' }
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
              <div className="skill-tags">
                {group.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                    title={skillLevels[skill.status].label}
                  >
                    <span
                      className="skill-tag-dot"
                      style={{ background: skillLevels[skill.status].color }}
                    ></span>
                    {skill.name}
                  </span>
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
        <div className="skills-legend mb-4 mb-md-5">
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
        <Row className="mb-4 mb-md-5">
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
