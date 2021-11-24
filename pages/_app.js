import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
