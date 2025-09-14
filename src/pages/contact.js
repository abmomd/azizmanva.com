import Layout from '@/components/Layout';
import { Container, Card } from 'react-bootstrap';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <Layout title="Contact Us - TorchBearers Academy" description="Get in touch with us.">
      <div style={{ backgroundColor: '#000000', minHeight: '100vh', padding: '80px 0' }}>
        <Container style={{ maxWidth: '600px' }}>
          <h1 className="text-center text-white mb-3">Contact Us</h1>
          <p className="text-center text-light mb-5">
            Have questions or suggestions? Reach out to us through the details below.
          </p>

          <Card style={{ backgroundColor: '#1a1a1a', borderRadius: '15px', padding: '40px' }} className="shadow-lg text-center text-white">
            <div className="mb-4">
              <FiMail size={28} className="mb-2" />
              <h5>Email</h5>
              <p>aziz@azizmanva.com</p>
            </div>

            <div className="mb-4">
              <FiPhone size={28} className="mb-2" />
              <h5>Phone</h5>
              <p>+91 9967355508</p>
            </div>

            <div>
              <FiMapPin size={28} className="mb-2" />
              <h5>Address</h5>
              <p><br /> Mumbai, India</p>
            </div>
          </Card>
        </Container>
      </div>

      <style jsx>{`
        h1 {
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        h5 {
          font-weight: 600;
          margin-top: 10px;
        }
        p {
          margin-bottom: 0;
          color: #ccc;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
