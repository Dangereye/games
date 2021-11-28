import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ darkMode, setDarkMode, children }) {
  const { state } = useContext(ThemeContext);
  console.log("Dark Mode?", state.dark_mode);

  return (
    <div
      style={{
        backgroundColor: state.background.primary,
      }}
    >
      <Navbar text_primary={state.text.primary} />
      <div className="page grid grid--sidebar">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
