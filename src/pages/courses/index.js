import Layout from '@/components/Layout';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import coursesData from '../../data/coursesData';
import Link from 'next/link';

const Courses = () => {
  return (
    <Layout title="Courses - TorchBearers Academy" description="Explore our courses.">
      <div style={{ backgroundColor: '#000000', minHeight: '100vh', padding: '50px 0' }}>
        <Container>
          <h1 className="mb-4 text-center text-white">Our Courses</h1>
          <p className="mb-5 text-center text-light">
            Choose from our range of expertly designed courses.
          </p>

          <Row xs={1} md={2} lg={3} className="g-4">
            {coursesData.map((course, idx) => (
              <Col key={idx}>
                <Card 
                  className="h-100 shadow-lg border-0"
                  style={{ borderRadius: '15px', transition: 'transform 0.3s, box-shadow 0.3s', backgroundColor: '#1a1a1a' }}
                >
                  <Card.Img 
                    variant="top" 
                    src={course.image} 
                    alt={course.title} 
                    style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="text-white">{course.title}</Card.Title>
                    <Card.Text className="text-light">{course.description}</Card.Text>
                    <Link href={course.link} passHref legacyBehavior>
                      <Button variant="primary">Learn More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(255,255,255,0.1);
        }
        .btn-primary {
          background-color: #007bff;
          border: none;
        }
        .btn-primary:hover {
          background-color: #0056b3;
        }
      `}</style>
    </Layout>
  );
};

export default Courses;
