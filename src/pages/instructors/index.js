import Layout from '@/components/Layout';
import { Card, Row, Col } from 'react-bootstrap';
import instructorsData from '../../data/instructorsData';

const Instructors = () => {
  return (
    <Layout title="Instructors - Notes Portal" description="Meet our expert instructors.">
      <h1>Instructors</h1>
      <p>Learn from our team of experienced and dedicated instructors.</p>

      {instructorsData.map((instructor, idx) => (
        <Card key={idx} className="mb-4 p-3 shadow-sm bg-dark text-white">
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
              <Card.Img 
                src={instructor.image} 
                alt={instructor.name} 
                className="img-fluid rounded"
              />
            </Col>
            <Col xs={12} md={9}>
              <Card.Body className="p-0">
                <Card.Title>{instructor.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-white">{instructor.title}</Card.Subtitle>
                <Card.Text>{instructor.bio}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}

    </Layout>
  );
};

export default Instructors;
