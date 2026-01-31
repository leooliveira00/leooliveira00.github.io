import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaServer, 
  FaCode, 
  FaRocket, 
  FaCheckCircle
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation('about');
  
  return (
    <section id="about" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>{t('title')}</h2>
          <p className="section-subtitle">
            {t('subtitle')}
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={8} className="mx-auto">
            <div className="about-content">
              <div className="about-label">
                <FaCheckCircle className="label-icon" />
                {t('label')}
              </div>
              
              <h3 className="about-heading">
                {t('heading')} <span className="gradient-text">{t('headingHighlight')}</span>
              </h3>
              
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t('paragraph1') }} />
              
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t('paragraph2') }} />

              <div className="about-highlights">
                <div className="highlight-item">
                  <FaServer className="highlight-icon" />
                  <div>
                    <h4>{t('highlights.infrastructure.title')}</h4>
                    <p>{t('highlights.infrastructure.description')}</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h4>{t('highlights.development.title')}</h4>
                    <p>{t('highlights.development.description')}</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaRocket className="highlight-icon" />
                  <div>
                    <h4>{t('highlights.vision.title')}</h4>
                    <p>{t('highlights.vision.description')}</p>
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
