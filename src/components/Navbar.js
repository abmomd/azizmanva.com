import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/notes', label: 'Notes' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="mb-4" sticky="top">
      <Container>
        <Link href="/" className="navbar-brand">TorchBearers Academy</Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${router.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
