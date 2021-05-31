import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ padding: '30px 30px 0', maxWidth: 960, margin: '0 auto' }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
