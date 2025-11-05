import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="mb-4" sticky="top">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>TorchBearers Academy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/courses" passHref legacyBehavior>
              <Nav.Link>Courses</Nav.Link>
            </Link>
            <Link href="/notes" passHref legacyBehavior>
              <Nav.Link>Notes</Nav.Link>
            </Link>
            <Link href="/instructors" passHref legacyBehavior>
              <Nav.Link>Instructors</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link>Contact Us</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
