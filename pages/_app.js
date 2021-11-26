import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="page grid grid--sidebar">
        <Sidebar />
        <Component {...pageProps} />{" "}
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
