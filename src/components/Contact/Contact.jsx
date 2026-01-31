import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaPhone, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ATENÇÃO: Atualmente simulando envio de email
    // Para enviar emails reais, integre com EmailJS, SendGrid ou configure backend
    // Veja o arquivo CONFIGURAR_EMAILJS.md na raiz do projeto para instruções
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: t('form.successMessage')
      });
      setIsSubmitting(false);
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Limpar status após 5 segundos
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: t('contactInfo.email'),
      value: 'lsousa2020@hotmail.com',
      link: 'mailto:lsousa2020@hotmail.com',
      key: 'email'
    },
    {
      icon: <FaPhone />,
      label: t('contactInfo.phone'),
      value: '+55 (62) 99941-3201',
      link: 'tel:+5562999413201',
      key: 'phone'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: t('contactInfo.location'),
      value: t('contactInfo.locationValue'),
      link: null,
      key: 'location'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: t('social.linkedin'),
      url: 'https://www.linkedin.com/in/leooliveira00/',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      label: t('social.github'),
      url: 'https://github.com/leooliveira00/',
      color: '#333'
    },
    {
      icon: <FaEnvelope />,
      label: t('social.email'),
      url: 'mailto:lsousa2020@hotmail.com',
      color: '#EA4335'
    }
  ];

  return (
    <section id="contact" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>{t('title')}</h2>
          <p className="section-subtitle">
            {t('subtitle')}
          </p>
        </div>

        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="contact-info-section">
              <h3 className="info-title">{t('infoTitle')}</h3>
              <p className="info-description">
                {t('infoDescription')}
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <div className="info-label">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="info-value">
                          {info.value}
                        </a>
                      ) : (
                        <div className="info-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links-section">
                <h4 className="social-title">{t('socialTitle')}</h4>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-card"
                      style={{ '--social-color': social.color }}
                    >
                      <div className="social-icon">{social.icon}</div>
                      <div className="social-label">{social.label}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form-section card-custom">
              <h3 className="form-title">{t('formTitle')}</h3>

              {formStatus.submitted && (
                <div className={`form-alert ${formStatus.success ? 'alert-success' : 'alert-error'}`}>
                  {formStatus.success ? (
                    <FaCheckCircle className="alert-icon" />
                  ) : (
                    <FaExclamationCircle className="alert-icon" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>{t('form.name')}</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('form.namePlaceholder')}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>{t('form.email')}</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('form.emailPlaceholder')}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>{t('form.subject')}</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('form.subjectPlaceholder')}
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>{t('form.message')}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.messagePlaceholder')}
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <button
                  type="submit"
                  className="btn-primary-custom btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      {t('form.sending')}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      {t('form.submit')}
                    </>
                  )}
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

