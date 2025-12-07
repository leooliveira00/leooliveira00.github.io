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
import './Contact.css';

const Contact = () => {
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

    // Simular envio (você pode integrar com EmailJS ou outro serviço)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
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
      label: 'Email',
      value: 'seu-email@exemplo.com',
      link: 'mailto:seu-email@exemplo.com'
    },
    {
      icon: <FaPhone />,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Localização',
      value: 'São Paulo, SP - Brasil',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/seu-perfil',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      url: 'https://github.com/seu-usuario',
      color: '#333'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      url: 'mailto:seu-email@exemplo.com',
      color: '#EA4335'
    }
  ];

  return (
    <section id="contact" className="section section-light">
      <Container>
        <div className="section-title">
          <h2>Vamos Trabalhar Juntos?</h2>
          <p className="section-subtitle">
            Estou disponível para novas oportunidades e projetos desafiadores
          </p>
        </div>

        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="contact-info-section">
              <h3 className="info-title">Entre em Contato</h3>
              <p className="info-description">
                Tem um projeto em mente ou quer conversar sobre oportunidades? 
                Preencha o formulário ou entre em contato pelos canais abaixo.
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
                <h4 className="social-title">Redes Sociais</h4>
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

              <div className="availability-badge">
                <div className="availability-dot"></div>
                <span>Disponível para trabalho</span>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form-section card-custom">
              <h3 className="form-title">Envie uma Mensagem</h3>

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
                      <Form.Label>Nome Completo</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu-email@exemplo.com"
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sobre o que gostaria de conversar?"
                    required
                    className="custom-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou oportunidade..."
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensagem
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

