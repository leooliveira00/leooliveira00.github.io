import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode, FaPlug, FaCogs, FaBuilding } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './WhatIBuild.css';

const CARD_ICONS = {
  web: <FaLaptopCode />,
  integrations: <FaPlug />,
  automation: <FaCogs />,
  corporate: <FaBuilding />
};

const WhatIBuild = () => {
  const { t } = useTranslation('whatIBuild');
  const cardKeys = Object.keys(CARD_ICONS);

  return (
    <section id="what-i-build" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <Row className="capability-grid">
          {cardKeys.map((key) => (
            <Col key={key} lg={3} md={6} sm={12} className="mb-3 mb-md-4" data-aos="fade-up">
              <div className="capability-card">
                <div className="capability-icon">{CARD_ICONS[key]}</div>
                <h3 className="capability-title">{t(`cards.${key}.title`)}</h3>
                <p className="capability-description">{t(`cards.${key}.description`)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhatIBuild;
