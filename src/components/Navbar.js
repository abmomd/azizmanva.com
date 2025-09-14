import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationBar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false); // Track navbar state

  const links = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/notes', label: 'Notes' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleNavClick = (href) => {
    setExpanded(false); // Close navbar on mobile
    router.push(href);  // Navigate to link
  };

  return (
    <Navbar 
      expand="lg" 
      bg="dark" 
      variant="dark" 
      className="mb-4" 
      sticky="top" 
      expanded={expanded}
    >
      <Container>
        <Link href="/" className="navbar-brand" onClick={() => setExpanded(false)}>
          TorchBearers Academy
        </Link>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Link
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                active={router.pathname === link.href}
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
