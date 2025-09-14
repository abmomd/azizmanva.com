import Head from 'next/head';
import { Container } from 'react-bootstrap';

const Layout = ({ children, title = "Aziz Manva", description = "A website for educational resources." }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container className="mt-4">
        {children}
      </Container>
    </>
  );
};

export default Layout;
