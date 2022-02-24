import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  
  return <>
  <Navbar />
  <NextNProgress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={10}
  showOnShallow={true}
/>
  <Component {...pageProps} /> 
  <Footer />
  </>
}

export default MyApp
