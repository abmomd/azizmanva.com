import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import NavigationBar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
