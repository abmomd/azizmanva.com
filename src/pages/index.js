import Layout from '@/components/Layout';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import CoursesSection from '../components/CourseSectionHomePage';

const Home = () => {
  return (
    <Layout
      title="Home - TorchBearers Academy"
      description="Welcome to TorchBearers Academy. Explore our courses and start learning today."
    >
      <div
        style={{
          background: 'radial-gradient(circle at top, #1f2933 0, #020617 45%, #000 100%)',
          minHeight: '100vh',
          paddingTop: '80px',
          paddingBottom: '40px',
          margin: 0,
        }}
      >
        <Container fluid style={{ padding: '20px 24px' }}>
          {/* Hero Section */}
          <div className="hero-section py-4 py-md-5">
            <Container fluid style={{ maxWidth: '1200px' }}>
              <div className="d-flex flex-column flex-md-row align-items-center gap-4 hero-wrapper">
                {/* Text Content */}
                <div className="text-center text-md-start flex-grow-1">
                  <p className="hero-kicker mb-2">TorchBearers Academy</p>
                  <h1 className="mb-3 hero-heading">
                    Learn today, lead tomorrow.
                  </h1>
                  <p className="lead mb-4 hero-subtitle">
                    TorchBearers Academy is a boutique firm offering 1-on-1 online tutoring.
                    We specialise in international curricula — because that’s what we teach every day.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                    <Link href="/contact" passHref legacyBehavior>
                      <Button size="lg" className="hero-primary-btn">
                        Book a Free Trial
                      </Button>
                    </Link>
                    <Link href="/instructors" passHref legacyBehavior>
                      <Button size="lg" variant="outline-light" className="hero-secondary-btn">
                        Instructors
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="hero-image text-center">
                  <img
                    src="images/student.png"
                    alt="Learning illustration"
                    className="img-fluid hero-img"
                  />
                </div>
              </div>
            </Container>
          </div>

          {/* Features Section */}
          <Row className="text-center mb-5 gy-3">
            <Col xs={6} md={3}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon mb-2">📚</div>
                  <Card.Title as="h6" className="feature-title">
                    Online Tutoring
                  </Card.Title>
                  <Card.Text className="feature-text">
                    Flexible, live 1-on-1 sessions from anywhere in the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon mb-2">🧑‍🏫</div>
                  <Card.Title as="h6" className="feature-title">
                    Experienced Teachers
                  </Card.Title>
                  <Card.Text className="feature-text">
                    Tutors who understand international boards and olympiads.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon mb-2">⚡</div>
                  <Card.Title as="h6" className="feature-title">
                    Great Results
                  </Card.Title>
                  <Card.Text className="feature-text">
                    Structured learning paths aimed at real score improvements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon mb-2">🎓</div>
                  <Card.Title as="h6" className="feature-title">
                    Personal Tutoring
                  </Card.Title>
                  <Card.Text className="feature-text">
                    Every session is customised to the student’s goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Courses Section */}
          <CoursesSection />
        </Container>
      </div>

<style jsx global>{`
  body {
    background: radial-gradient(circle at top, #1f2933 0, #020617 45%, #000 100%);
    margin: 0;
    padding: 0;
    color: #e5e7eb;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
    color: #f9fafb;
  }

  .lead {
    color: #9ca3af;
  }

  /* Hero */
  .hero-wrapper {
    background: transparent; /* Removed boxed look */
    border: none;
    padding: 4rem 3rem;
  }

  .hero-heading {
    font-size: clamp(2rem, 3vw, 2.6rem);
    letter-spacing: 0.02em;
  }

  .hero-subtitle {
    font-size: 1rem;
    max-width: 520px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .hero-subtitle {
      margin: 0;
    }
  }

  .hero-kicker {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #a5b4fc;
  }

  .hero-primary-btn {
    background: linear-gradient(135deg, #4f46e5, #6366f1);
    border: none;
    padding-inline: 1.8rem;
    font-weight: 600;
  }

  .hero-primary-btn:hover,
  .hero-primary-btn:focus {
    background: linear-gradient(135deg, #4338ca, #4f46e5);
  }

  .hero-secondary-btn {
    border-width: 1px;
    border-color: rgba(148, 163, 184, 0.8);
    color: #e5e7eb;
    background: transparent;
  }

  .hero-secondary-btn:hover,
  .hero-secondary-btn:focus {
    background: rgba(148, 163, 184, 0.1);
    color: #f9fafb;
  }

  .hero-image .hero-img {
    max-height: 260px;
    object-fit: contain;
    filter: drop-shadow(0 18px 40px rgba(15, 23, 42, 0.8));
  }

  @media (max-width: 767px) {
    .hero-image .hero-img {
      max-height: 190px;
    }
  }

  /* Features */
  .feature-card {
    background: rgba(15, 23, 42, 0.6); /* Slight glass effect */
    border-radius: 1rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    backdrop-filter: blur(6px);
  }

  .feature-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #e5e7eb;
  }

  .feature-text {
    font-size: 0.85rem;
    color: #9ca3af;
    margin-bottom: 0;
  }

  .feature-icon {
    font-size: 1.5rem;
  }

  /* Course cards */
  .course-card {
    background: rgba(2, 6, 23, 0.75);
    border: 1px solid rgba(148, 163, 184, 0.35);
    color: #e5e7eb;
    backdrop-filter: blur(4px);
  }

  .course-card .card-title {
    color: #f9fafb;
  }

  .course-card .card-text {
    color: #9ca3af;
  }
`}</style>

    </Layout>
  );
};

export default Home;
