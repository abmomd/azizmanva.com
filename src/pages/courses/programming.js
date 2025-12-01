import Layout from '@/components/Layout';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiCode, FiCpu, FiLayers, FiPlayCircle } from 'react-icons/fi';

const Programming = () => {
  return (
    <Layout
      title="Programming & Olympiad Coding | TorchBearers Academy"
      description="Python, Java, and Olympiad programming (ZCO/USACO) for school students."
    >
      <div className="course-page">
        <Container style={{ maxWidth: '1100px' }}>
          {/* Header */}
          <header className="course-header text-center mb-5">
            <p className="course-kicker">Programming</p>
            <h1 className="course-title">
              Python, Java & Olympiad Programming
            </h1>
            <p className="course-subtitle">
              From first programs to Olympiad-level problems, we help students build strong
              foundations in coding and algorithmic thinking through structured, hands-on learning.
            </p>
          </header>

          {/* Track Cards */}
          <Row className="gy-4 mb-5">
            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiCode className="course-info-icon" />
                  <h5 className="course-info-title">Python Programming</h5>
                  <p className="course-info-text">
                    Ideal as a first programming language. We cover basics to intermediate topics
                    with projects, problem sets, and practical applications.
                  </p>
                  <ul className="course-list mt-3">
                    <li>Syntax & core concepts</li>
                    <li>Functions & modules</li>
                    <li>File handling & simple projects</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiCpu className="course-info-icon" />
                  <h5 className="course-info-title">Java Programming</h5>
                  <p className="course-info-text">
                    Great for students targeting AP CS, university CS, or strongly typed languages.
                    We teach core Java with a problem-solving focus.
                  </p>
                  <ul className="course-list mt-3">
                    <li>OOP fundamentals</li>
                    <li>Arrays, lists, and basic data structures</li>
                    <li>Problem sets aligned with contest-style thinking</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="course-info-card h-100">
                <Card.Body>
                  <FiLayers className="course-info-icon" />
                  <h5 className="course-info-title">Olympiad Programming</h5>
                  <p className="course-info-text">
                    Focused preparation for Olympiad-style contests like ZCO and USACO, with
                    emphasis on algorithms and data structures.
                  </p>
                  <ul className="course-list mt-3">
                    <li>Problem decomposition</li>
                    <li>Time complexity awareness</li>
                    <li>Contest-style practice problems</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* How We Teach & Who It's For */}
          <Row className="gy-4 align-items-stretch mb-4">
            <Col xs={12} md={7}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <h4 className="course-section-title">How We Teach</h4>
                  <ul className="course-list">
                    <li>Live coding during sessions with students encouraged to type along.</li>
                    <li>Concept explanation followed by small tasks and incremental challenges.</li>
                    <li>Gradual introduction to problem-solving patterns and algorithms.</li>
                    <li>For Olympiad track: focus on topics like greedy, DP, graphs, recursion.</li>
                    <li>Regular review of previous topics to ensure long-term retention.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card className="course-detail-card h-100">
                <Card.Body>
                  <FiPlayCircle className="course-info-icon" />
                  <h4 className="course-section-title">Who Is This For?</h4>
                  <ul className="course-list">
                    <li>Middle and high school students new to coding.</li>
                    <li>Students who want to strengthen programming for school and beyond.</li>
                    <li>Students preparing for Olympiad programming contests (ZCO, USACO, etc.).</li>
                    <li>Those who like logical puzzles and want to explore CS in depth.</li>
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

export default Programming;
