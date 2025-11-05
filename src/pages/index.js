import Layout from '@/components/Layout';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import CoursesSection from '../components/CourseSectionHomePage';

const Home = () => {
  return (
    <Layout title="Home - TorchBearers Academy" description="Welcome to TorchBearers Academy. Explore our courses and start learning today.">
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '80px', paddingBottom: '40px', margin: 0 }}>
        <Container fluid style={{ padding: '20px 40px' }}>
          {/* Hero Section */}
<div className="hero-section py-5">
  <Container fluid style={{ maxWidth: '1200px' }}>
    <div className="d-flex flex-column flex-md-row align-items-center bg-light-pink rounded-3 shadow p-4">
      {/* Text Content */}
      <div className="text-center text-md-start flex-grow-1 mb-4 mb-md-0">
        <h1 className="mb-3 text-black">Learn for the sake of the future!</h1>
        <p className="lead mb-4 text-muted">
          Torchbearers Academy is a boutique firm offers 1 on 1 online tutoring. We understand international curriculum because that is what we teach every day.
        </p>
        <Link href="/courses" passHref legacyBehavior>
          <Button variant="primary" size="lg">Get Started</Button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="hero-image text-center">
        <img src="images/student.png" alt="Learning illustration" className="img-fluid" style={{ maxHeight: '250px' }} />
      </div>
    </div>
  </Container>

</div>


          {/* Features Section */}
          <Row className="text-center mb-5">
            <Col>
              <h6>📚 Online Tutoring</h6>
            </Col>
            <Col>
              <h6>🧑‍🏫 Experienced Teachers</h6>
            </Col>
            <Col>
              <h6>⚡ Great Results</h6>
            </Col>
            <Col>
              <h6>🎓 Personal Tutoring</h6>
            </Col>
          </Row>


        <CoursesSection />
        </Container>
      </div>

      <style jsx global>{`
        body {
          background-color: #ffffff;
          margin: 0;
          padding: 0;
        }
        h1 {
          font-weight: 700;
        }
        h2 {
          font-weight: 600;
        }
        .lead {
          color: #555;
        }
        h6 {
          font-size: 1rem;
          color: #666;
        }
          .bg-light-pink {
      background-color: #f9eeeeff;
    }
    @media (max-width: 767px) {
      .hero-image img {
        max-height: 150px;
      }
    }
       .course-card {
    background-color: #e6fdffff; /* Light pink background by default */
    border: none;
  }
      `}</style>
    </Layout>
  );
};

export default Home;
