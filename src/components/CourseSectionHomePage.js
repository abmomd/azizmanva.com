import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

// Courses data is defined only inside this component
const CoursesSection = () => {
  const courses = [
    {
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced projects with hands-on exercises.',
      link: '/courses/python'
    },
    {
      title: 'Mathematics',
      description: 'Master competitive and school-level mathematics with guided lessons.',
      link: '/courses/maths'
    },
    {
      title: 'Programming Challenges',
      description: 'Sharpen your coding skills with fun challenges and real-world problems.',
      link: '/courses/coding'
    },
        {
      title: 'Statistics Course',
      description: 'Sharpen your coding skills with fun challenges and real-world problems.',
      link: '/courses/coding'
    },
{
      title: 'Chemistry Course',
      description: 'Sharpen your coding skills with fun challenges and real-world problems.',
      link: '/courses/coding'
    },

  ];

  return (
    <Container fluid style={{ padding: '20px 40px' }}>
      <h2 className="mb-4 text-center text-black">Most Popular Courses</h2>
      <Row className="g-4 justify-content-center">
        {courses.map((course, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className="h-100 course-card">
              <Card.Body className="text-center">
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Link href={course.link} passHref legacyBehavior>
                  <Button variant="primary">View Course</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .course-card {
          background-color: #ffe6e6;
          border: none;
        }
      `}</style>
    </Container>
  );
};

export default CoursesSection;
