import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="grid grid--sidebar">
        <sidebar>abcd</sidebar>
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
