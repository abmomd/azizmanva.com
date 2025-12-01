import Layout from '@/components/Layout';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiBookOpen, FiGlobe, FiUsers, FiTarget } from 'react-icons/fi';

const InternationalMathPhysics = () => {
  return (
    <Layout
      title="International Math & Physics – IBDP, IGCSE, AP | TorchBearers Academy"
      description="Structured support for IBDP, IGCSE, AP, and US curriculum in Math and Physics."
    >
      <div className="course-page">
        <Container style={{ maxWidth: '1100px' }}>
          {/* Header */}
          <header className="course-header text-center mb-5">
            <p className="course-kicker">International Math & Physics</p>
            <h1 className="course-title">
              IBDP, IGCSE, AP & US Curriculum
            </h1>
            <p className="course-subtitle">
              International curriculum requires a different approach with concept-oriented,
              thought-provoking questions. We bring deep experience, structured teaching,
              and extensive resources to help students excel.
            </p>
          </header>

          {/* High-level Cards */}
          <Row className="gy-4 mb-5">
            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiGlobe className="course-info-icon" />
                  <h5 className="course-info-title">Global Curricula</h5>
                  <p className="course-info-text">
                    We specialise in IBDP, IGCSE, AP, and US curriculum, understanding each
                    board’s expectations, assessment styles, and marking schemes.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiBookOpen className="course-info-icon" />
                  <h5 className="course-info-title">Concept-Oriented Teaching</h5>
                  <p className="course-info-text">
                    Strong focus on fundamentals, connections between topics, and
                    question-types commonly seen in school tests and final exams.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiTarget className="course-info-icon" />
                  <h5 className="course-info-title">Score Improvement</h5>
                  <p className="course-info-text">
                    Regular homework, past-paper practice, and exam-style mock tests
                    tailored to each syllabus and level.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Curriculum Breakdown */}
          <Row className="gy-4 mb-5">
            <Col xs={12} md={6}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">Math & Physics by Board</h4>
                  <ul className="course-list">
                    <li>
                      <strong>IBDP:</strong> Math AA/AI SL & HL, Physics SL/HL
                    </li>
                    <li>
                      <strong>IGCSE:</strong> Additional Math, Physics
                    </li>
                    <li>
                      <strong>AP:</strong> Calculus AB & BC, Physics 1 / 2 / C
                    </li>
                    <li>
                      <strong>US Curriculum:</strong> Algebra 1/2, Geometry,
                      PreCalculus (incl. Honors), Physics
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">Who Is This For?</h4>
                  <ul className="course-list">
                    <li>Students in international schools (IB, Cambridge, US boards).</li>
                    <li>Students switching from local to international curricula.</li>
                    <li>Students aiming for strong predicted grades for college applications.</li>
                    <li>Those who want deeper conceptual clarity, not just exam cramming.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Teaching Approach */}
          <Row className="gy-4 align-items-stretch">
            <Col xs={12} md={7}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">How We Teach</h4>
                  <ul className="course-list">
                    <li>Diagnostic discussion to understand current level and goals.</li>
                    <li>Customised learning plan mapped to your school’s pacing.</li>
                    <li>Concept-first explanation, followed by graded problems.</li>
                    <li>Dedicated sessions for IA-style thinking (for IB) and FRQ-style problems (for AP).</li>
                    <li>Regular checkpoints and feedback to students and parents.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <FiUsers className="course-info-icon" />
                  <h4 className="course-section-title">Session Format</h4>
                  <ul className="course-list">
                    <li>1-on-1 online tutoring.</li>
                    <li>60–90 minute sessions.</li>
                    <li>Flexible scheduling across time zones.</li>
                    <li>Homework support and exam-prep blocks closer to tests.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx global>{`
        .course-page {
          padding-top: 90px;
          padding-bottom: 60px;
          background: transparent;
        }

        .course-header .course-kicker {
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 0.4rem;
        }

        .course-header .course-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #f9fafb;
          margin-bottom: 0.6rem;
        }

        .course-header .course-subtitle {
          max-width: 720px;
          margin: 0 auto;
          color: #9ca3af;
          font-size: 0.95rem;
        }

        .course-info-card,
        .course-detail-card {
          background: radial-gradient(
            circle at top left,
            rgba(15, 23, 42, 0.96),
            rgba(15, 23, 42, 0.85)
          );
          border-radius: 1.25rem;
          border: 1px solid rgba(30, 64, 175, 0.55);
          box-shadow: 0 20px 65px rgba(15, 23, 42, 0.8);
          color: #e5e7eb;
          backdrop-filter: blur(10px);
        }

        .course-info-card {
          text-align: left;
        }

        .course-info-icon {
          font-size: 1.7rem;
          color: #a5b4fc;
          margin-bottom: 0.5rem;
        }

        .course-info-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .course-info-text {
          font-size: 0.9rem;
          color: #d1d5db;
        }

        .course-section-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #f9fafb;
          margin-bottom: 0.75rem;
        }

        .course-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          font-size: 0.9rem;
          color: #d1d5db;
        }

        .course-list li {
          position: relative;
          padding-left: 1.1rem;
          margin-bottom: 0.4rem;
        }

        .course-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: #60a5fa;
        }

        @media (max-width: 767px) {
          .course-page {
            padding-top: 80px;
            padding-bottom: 40px;
          }

          .course-info-card,
          .course-detail-card {
            border-radius: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default InternationalMathPhysics;
