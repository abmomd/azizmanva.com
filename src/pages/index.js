import Layout from '@/components/Layout';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout title="Home - TorchBearers Academy" description="Welcome to TorchBearers Academy. Explore our courses and start learning today.">
      <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '80px 0', color: '#fff' }}>
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-5">
            <h1 className="mb-3">Welcome to TorchBearers Academy</h1>
            <p className="lead mb-4">
              Your journey to excellence starts here. Explore our courses, enhance your skills, and achieve your goals.
            </p>
            <Link href="/courses" passHref>
              <Button variant="light" size="lg">Explore Courses</Button>
            </Link>
          </div>

          {/* Courses Preview Section */}
          <h2 className="mb-4 text-center">Our Popular Courses</h2>
          <Row className="g-4 justify-content-center">
            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '15px' }} className="h-100 shadow-lg">
                <Card.Body className="text-center">
                  <Card.Title>Python Programming</Card.Title>
                  <Card.Text>Learn Python from basics to advanced projects with hands-on exercises.</Card.Text>
                  <Link href="/courses/python" passHref>
                    <Button variant="light">View Course</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '15px' }} className="h-100 shadow-lg">
                <Card.Body className="text-center">
                  <Card.Title>Mathematics</Card.Title>
                  <Card.Text>Master competitive and school-level mathematics with guided lessons.</Card.Text>
                  <Link href="/courses/maths" passHref>
                    <Button variant="light">View Course</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: '#1a1a1a', color: '#fff', borderRadius: '15px' }} className="h-100 shadow-lg">
                <Card.Body className="text-center">
                  <Card.Title>Programming Challenges</Card.Title>
                  <Card.Text>Sharpen your coding skills with fun challenges and real-world problems.</Card.Text>
                  <Link href="/courses/coding" passHref>
                    <Button variant="light">View Course</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        h1 {
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        h2 {
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        p {
          color: #ccc;
        }
        .lead {
          font-size: 1.25rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
