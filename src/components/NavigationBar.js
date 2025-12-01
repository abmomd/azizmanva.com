import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationBar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/notes', label: 'Notes' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleNavClick = (href) => {
    setExpanded(false);
    router.push(href);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="custom-navbar"
        sticky="top"
        expanded={expanded}
      >
        <Container fluid style={{ padding: '0 20px' }}>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand
              onClick={() => setExpanded(false)}
              className="navbar-brand-text"
            >
              TorchBearers Academy
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="navbar-nav"
            className="navbar-toggler-custom"
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {links.map((link) => (
                <Nav.Link
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  active={router.pathname === link.href}
                  className={`nav-link-custom ${
                    router.pathname === link.href ? 'active-link' : ''
                  }`}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx global>{`
        .custom-navbar {
          background: rgba(2, 6, 23, 0.9); /* Dark glass effect */
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
        }

        .navbar-brand-text {
          font-weight: 700;
          color: #f9fafb !important;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }

        .navbar-brand-text:hover {
          color: #a5b4fc !important;
        }

        .nav-link-custom {
          color: #e5e7eb !important;
          font-weight: 400;
          margin-left: 10px;
          transition: color 0.25s ease, font-weight 0.25s ease;
        }

        .nav-link-custom:hover {
          color: #a5b4fc !important;
        }

        .active-link {
          font-weight: 600 !important;
          color: #6366f1 !important; /* Indigo accent for active link */
        }

        .navbar-toggler-custom {
          border-color: rgba(148, 163, 184, 0.25);
        }

        .navbar-toggler-icon {
          filter: brightness(150%);
        }

        @media (max-width: 768px) {
          .custom-navbar {
            background: rgba(2, 6, 23, 0.95);
          }
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
