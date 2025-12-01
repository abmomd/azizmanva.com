import Layout from '../../components/Layout';
import { Card, Row, Col, Container } from 'react-bootstrap';
import instructorsData from '../../data/instructorsData';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Instructors = () => {
  return (
    <Layout
      title="Instructors - TorchBearers Academy"
      description="Meet our expert instructors."
    >
      <div className="instructors-page">
        <Container fluid style={{ maxWidth: '1100px' }}>
          <header className="instructors-header text-center mb-5">
            <p className="instructors-kicker">Our Team</p>
            <h1 className="instructors-title">Meet the Instructors</h1>
            <p className="instructors-subtitle">
              Learn from a team of experienced, passionate tutors who specialise in
              international curricula and competitive exams.
            </p>
          </header>

          <Row className="gy-4">
            {instructorsData.map((instructor, idx) => (
              <Col key={idx} xs={12}>
                <Card className="instructor-card p-3 p-md-4">
                  <Row className="align-items-center g-3 g-md-4">
                    <Col xs={12} md={3} className="text-center">
                      <Card.Img
                        src={instructor.image}
                        alt={instructor.name}
                        className="img-fluid instructor-avatar"
                      />
                    </Col>
                    <Col xs={12} md={9}>
                      <Card.Body className="p-0">
  <div className="instructor-header">
    <Card.Title className="instructor-name">
      {instructor.name}
    </Card.Title>

    {instructor.linkedin && (
      <a
        href={instructor.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    )}
  </div>

  <Card.Subtitle className="mb-2 instructor-role">
    {instructor.title}
  </Card.Subtitle>

  <Card.Text className="instructor-bio">
    {instructor.bio}
  </Card.Text>
</Card.Body>

                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <style jsx global>{`
        .instructors-page {
          padding-top: 90px;
          padding-bottom: 40px;
          background: transparent; /* so it uses the same global radial bg */
        }

        .instructors-header .instructors-kicker {
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 0.4rem;
        }

        .instructors-header .instructors-title {
          font-size: clamp(2rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #f9fafb;
          margin-bottom: 0.6rem;
        }

        .instructors-header .instructors-subtitle {
          max-width: 640px;
          margin: 0 auto;
          color: #9ca3af;
          font-size: 0.95rem;
        }

        .instructor-card {
          background: radial-gradient(circle at top left,
              rgba(15, 23, 42, 0.95),
              rgba(15, 23, 42, 0.82));
          border-radius: 1.25rem;
          border: 1px solid rgba(30, 64, 175, 0.55);
          box-shadow: 0 18px 60px rgba(15, 23, 42, 0.75);
          color: #e5e7eb;
          backdrop-filter: blur(10px);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .instructor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.9);
          border-color: rgba(129, 140, 248, 0.9);
        }

        /* Clean circular photo, no ring */
        .instructor-avatar {
          width: 150px;
          height: 150px;
          border-radius: 999px;
          object-fit: cover;
          border: 2px solid rgba(148, 163, 184, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }
.instructor-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.linkedin-icon {
  font-size: 1.2rem;
  color: #60a5fa; /* Light blue */
  transition: color 0.2s ease, transform 0.2s ease;
}

.linkedin-icon:hover {
  color: #3b82f6; /* Brighter blue */
  transform: scale(1.15);
}

        .instructor-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #f9fafb;
        }

        .instructor-role {
          font-size: 0.9rem;
          color: #a5b4fc;
        }

        .instructor-bio {
          font-size: 0.92rem;
          color: #d1d5db;
          margin-top: 0.4rem;
        }

        .instructor-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .instructor-tag-pill {
          font-size: 0.75rem;
          padding: 0.18rem 0.6rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.7);
          color: #e5e7eb;
          background: rgba(15, 23, 42, 0.8);
        }

        @media (max-width: 767px) {
          .instructors-page {
            padding-top: 80px;
          }

          .instructor-card {
            border-radius: 1rem;
          }

          .instructor-avatar {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Instructors;
