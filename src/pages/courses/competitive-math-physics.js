import Layout from '@/components/Layout';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiTarget, FiAward, FiTrendingUp, FiClock } from 'react-icons/fi';

const CompetitiveMathPhysics = () => {
  return (
    <Layout
      title="Competitive Math & Physics | TorchBearers Academy"
      description="Training for AMC, Mathcounts, F=ma, CEMC and other competitive exams."
    >
      <div className="course-page">
        <Container style={{ maxWidth: '1100px' }}>
          {/* Header */}
          <header className="course-header text-center mb-5">
            <p className="course-kicker">Competitive Math & Physics</p>
            <h1 className="course-title">
              Olympiad & Contest Training
            </h1>
            <p className="course-subtitle">
              Competitive Math and Physics go beyond school curriculum and are excellent
              for developing problem-solving depth and building college-ready profiles.
              We offer structured coaching for a range of international contests.
            </p>
          </header>

          {/* Exams List & Benefits */}
          <Row className="gy-4 mb-5">
            <Col xs={12} md={6}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">Exams We Support</h4>
                  <ul className="course-list">
                    <li>AMC 8 / 10 / 12 (USA)</li>
                    <li>Mathcounts (USA)</li>
                    <li>F = ma (USA Physics)</li>
                    <li>CEMC contests (Canada)</li>
                    <li>School-level and regional math/physics contests</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">Why Competitive?</h4>
                  <ul className="course-list">
                    <li>Sharpens logical reasoning and problem-solving skills.</li>
                    <li>Exposes students to beautiful, non-routine problems.</li>
                    <li>Helps build strong academic profiles for college admissions.</li>
                    <li>Makes regular school math & physics feel easier by comparison.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Approach Cards */}
          <Row className="gy-4 mb-4">
            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiTarget className="course-info-icon" />
                  <h5 className="course-info-title">Structured Syllabus</h5>
                  <p className="course-info-text">
                    Topic-wise progression tailored to each contest (e.g., AMC 10 vs AMC 12),
                    including algebra, number theory, combinatorics, geometry, and mechanics.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiClock className="course-info-icon" />
                  <h5 className="course-info-title">Timed Practice</h5>
                  <p className="course-info-text">
                    Past papers, timed quizzes, and exam simulations to build speed and
                    accuracy under pressure.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiAward className="course-info-icon" />
                  <h5 className="course-info-title">Performance Tracking</h5>
                  <p className="course-info-text">
                    Regular feedback, difficulty ramp-up, and targeted revision based on
                    student performance.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Who it's for & Format */}
          <Row className="gy-4 align-items-stretch">
            <Col xs={12} md={7}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">Who Is This For?</h4>
                  <ul className="course-list">
                    <li>Students who enjoy math and physics and want to go deeper.</li>
                    <li>Middle and high school students aiming for AMC / Mathcounts / F = ma / CEMC.</li>
                    <li>Students building strong STEM profiles for universities abroad.</li>
                    <li>Those who want Olympiad-style thinking alongside school curriculum.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <FiTrendingUp className="course-info-icon" />
                  <h4 className="course-section-title">Session Format</h4>
                  <ul className="course-list">
                    <li>1-on-1 online sessions.</li>
                    <li>Focused topic blocks (e.g., Geometry bootcamps).</li>
                    <li>Homework sets between sessions.</li>
                    <li>Mock tests leading up to contest dates.</li>
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

export default CompetitiveMathPhysics;
