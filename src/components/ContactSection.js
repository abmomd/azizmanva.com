import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactSection = () => {
  return (
    <section
      className="py-5 text-light"
      style={{
        backgroundColor: "#0d1117",
      }}
    >
      <Container>
        <h2 className="fw-bold text-center mb-3">
          📬 Contact Us
        </h2>
        <p className="text-secondary text-center mb-5">
          Have questions, feedback, or collaboration ideas? We’d love to hear from you!
        </p>

        <Row className="align-items-start g-5">
          {/* Left Column: Form */}
          <Col lg={6} md={12}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message submitted successfully!");
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control bg-transparent text-light border-secondary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control bg-transparent text-light border-secondary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="form-control bg-transparent text-light border-secondary"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg mt-2 w-100"
                style={{
                  backgroundColor: "#238636",
                  borderColor: "#238636",
                }}
              >
                Send Message
              </button>
            </form>
          </Col>

          {/* Right Column: Contact Info */}
          <Col lg={6} md={12}>
            <div className="d-flex flex-column justify-content-center h-100 ps-lg-5">
              <h4 className="fw-bold mb-3">📞 Get in Touch</h4>
              <p className="text-secondary mb-4">
                Feel free to reach out via email or phone — I usually respond within 24 hours.
              </p>

              <ul className="list-unstyled fs-6">
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  <a
                    href="mailto:hello@azizmanva.com"
                    className="text-decoration-none text-light"
                  >
                    aziz@azizmanva.com
                  </a>
                </li>

                <li className="mb-3">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  <a
                    href="tel:+919876543210"
                    className="text-decoration-none text-light"
                  >
                    +91 99673 55508
                  </a>
                </li>

                <li className="mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  <span>Mumbai, India</span>
                </li>
              </ul>

              {/* <div className="mt-4">
                <h5 className="fw-semibold mb-2"> Follow Me</h5>
                <div className="d-flex gap-3">
                  <a
                    href="https://linkedin.com/in/azizmanva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light fs-5"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/azizmanva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light fs-5"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://twitter.com/azizmanva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light fs-5"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>

        <div className="text-center mt-5 text-secondary small">
          <p>© {new Date().getFullYear()} Aziz Manva. All rights reserved.</p>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
