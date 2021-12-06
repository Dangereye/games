import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const { state } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: state.background.primary,
      }}
    >
      <Navbar />
      <div className="page grid grid--sidebar">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
