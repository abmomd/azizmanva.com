import Layout from '@/components/Layout';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <Layout
      title="Contact Us - TorchBearers Academy"
      description="Get in touch with us."
    >
      <div className="contact-page">
        <Container style={{ maxWidth: '800px' }}>
          <header className="text-center mb-5">
            <p className="contact-kicker">Get in Touch</p>
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              Have questions about courses, tutoring, or collaborations?
              Reach out and we’ll get back to you soon.
            </p>
          </header>

          <Card className="contact-card text-white shadow-lg">
            <Row className="text-center gy-4">
              <Col xs={12} md={4}>
                <div className="contact-item">
                  <FiMail size={28} className="contact-icon" />
                  <h5 className="contact-label">Email</h5>
                  <p className="contact-text">azizmanva@gmail.com</p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="contact-item">
                  <FiPhone size={28} className="contact-icon" />
                  <h5 className="contact-label">Phone</h5>
                  <p className="contact-text">+91 9967355508</p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="contact-item">
                  <FiMapPin size={28} className="contact-icon" />
                  <h5 className="contact-label">Location</h5>
                  <p className="contact-text">Mumbai, India</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>

      <style jsx global>{`
        .contact-page {
          padding-top: 90px;
          padding-bottom: 60px;
          background: transparent; /* use same global radial bg as other pages */
        }

        .contact-kicker {
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 0.4rem;
        }

        .contact-title {
          font-size: clamp(2rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #f9fafb;
          margin-bottom: 0.6rem;
        }

        .contact-subtitle {
          max-width: 540px;
          margin: 0 auto;
          font-size: 0.95rem;
          color: #9ca3af;
        }

        .contact-card {
          background: radial-gradient(
            circle at top left,
            rgba(15, 23, 42, 0.96),
            rgba(15, 23, 42, 0.84)
          );
          border-radius: 1.25rem;
          border: 1px solid rgba(30, 64, 175, 0.55);
          box-shadow: 0 20px 65px rgba(15, 23, 42, 0.8);
          padding: 32px 28px;
          backdrop-filter: blur(12px);
        }

        .contact-item {
          padding-inline: 8px;
        }

        .contact-icon {
          margin-bottom: 0.6rem;
          color: #60a5fa;
        }

        .contact-label {
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #e5e7eb;
          font-size: 1rem;
        }

        .contact-text {
          margin-bottom: 0;
          color: #d1d5db;
          font-size: 0.92rem;
        }

        @media (max-width: 767px) {
          .contact-page {
            padding-top: 80px;
            padding-bottom: 40px;
          }

          .contact-card {
            border-radius: 1rem;
            padding: 24px 18px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
