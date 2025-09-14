import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationBar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/notes', label: 'Notes' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleNavClick = (href) => {
    setExpanded(false);
    router.push(href);
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm"
      sticky="top"
      expanded={expanded}
    >
      <Container fluid style={{ padding: '0 20px' }}>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand onClick={() => setExpanded(false)} style={{ fontWeight: 'bold' }}>
            TorchBearers Academy
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Link
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                active={router.pathname === link.href}
                style={{
                  fontWeight: router.pathname === link.href ? '600' : '400',
                  color: router.pathname === link.href ? '#007bff' : '#333',
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
