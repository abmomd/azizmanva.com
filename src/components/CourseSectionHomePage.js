import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiBookOpen, FiTarget, FiCode } from 'react-icons/fi';

// CoursesSection for home page
const CoursesSection = () => {
  const courses = [
    {
      title: 'International Math and Physics: IBDP, IGCSE, AP',
      icon: <FiBookOpen className="course-icon" />,
      blurb:
        'International curriculum needs a different thought process, with concept-oriented and application-based questions. We use structured teaching, extensive resources, and targeted practice.',
      items: [
        'IBDP: Math AA/AI SL & HL, Physics SL/HL',
        'IGCSE: Additional Math, Physics',
        'AP: Calculus AB & BC, Physics 1/2/C',
        'US Curriculum: Algebra 1/2, Geometry, PreCalculus (incl. Honors), Physics',
      ],
      link: '/courses/international-math-physics',
      cta: 'Explore International Courses',
    },
    {
      title: 'Competitive Math and Physics',
      icon: <FiTarget className="course-icon" />,
      blurb:
        'Competitive exams give exposure beyond school curriculum and are excellent for profile building for college admissions. We train with proven strategies and high-quality problem sets.',
      items: [
        'AMC 8 / 10 / 12 (USA)',
        'Mathcounts (USA)',
        'F = ma (USA)',
        'CEMC contests (Canada)',
      ],
      link: '/courses/competitive-math-physics',
      cta: 'View Competitive Track',
    },
    {
      title: 'Programming',
      icon: <FiCode className="course-icon" />,
      blurb:
        'From foundations to Olympiad-style thinking, we build strong coding and problem-solving skills in a structured, student-friendly way.',
      items: [
        'Olympiad Programming: ZCO / USACO',
        'Python Programming',
        'Java Programming',
      ],
      link: '/courses/programming',
      cta: 'Explore Programming',
    },
  ];

  return (
    <section className="courses-section">
      <Container fluid style={{ padding: '20px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <header className="text-center mb-4 mb-md-5">
            <p className="courses-kicker">What We Teach</p>
            <h2 className="courses-title">Our Core Programs</h2>
            <p className="courses-subtitle">
              Structured, high-impact tutoring across international curriculum, competitive math
              and physics, and programming.
            </p>
          </header>

          <Row className="g-4">
            {courses.map((course, index) => (
              <Col key={index} xs={12} md={4}>
                <Card className="h-100 course-card">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3 gap-2">
                      {course.icon}
                      <Card.Title className="course-title mb-0">
                        {course.title}
                      </Card.Title>
                    </div>

                    <Card.Text className="course-blurb mb-3">
                      {course.blurb}
                    </Card.Text>

                    <ul className="course-list mb-4">
                      {course.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <Link href={course.link} passHref legacyBehavior>
                      <Button className="course-btn">
                        {course.cta}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <style jsx>{`
        .courses-section {
          padding: 40px 0 20px;
        }

        .courses-kicker {
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 0.4rem;
        }

        .courses-title {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 700;
          color: #f9fafb;
          margin-bottom: 0.5rem;
        }

        .courses-subtitle {
          max-width: 600px;
          margin: 0 auto;
          font-size: 0.95rem;
          color: #9ca3af;
        }

        .course-card {
          background: radial-gradient(
            circle at top left,
            rgba(15, 23, 42, 0.96),
            rgba(15, 23, 42, 0.85)
          );
          border-radius: 1.25rem;
          border: 1px solid rgba(30, 64, 175, 0.55);
          box-shadow: 0 18px 60px rgba(15, 23, 42, 0.75);
          color: #e5e7eb;
          backdrop-filter: blur(10px);
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.9);
          border-color: rgba(129, 140, 248, 0.9);
        }

        .course-icon {
          font-size: 1.4rem;
          color: #a5b4fc;
          flex-shrink: 0;
        }

        .course-title {
          font-size: 1rem;
          font-weight: 600;
          color: #f9fafb;
        }

        .course-blurb {
          font-size: 0.9rem;
          color: #d1d5db;
        }

        .course-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .course-list li {
          position: relative;
          padding-left: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .course-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: #60a5fa;
        }

        .course-btn {
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding-inline: 1.4rem;
        }

        .course-btn:hover,
        .course-btn:focus {
          background: linear-gradient(135deg, #4338ca, #4f46e5);
        }

        @media (max-width: 767px) {
          .courses-section {
            padding-top: 30px;
          }

          .course-card {
            border-radius: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CoursesSection;
