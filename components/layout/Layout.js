import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);

  return (
    <div
      className="layout"
      style={{
        backgroundColor: themeState.background.primary,
      }}
    >
      <div
        className="layout__background"
        style={{
          backgroundImage: appState.data.background_image
            ? `url(${appState.data.background_image})`
            : "none",
        }}
      >
        <div
          className="layout__background__overlay"
          style={{
            background: themeState.background.gradient,
          }}
        ></div>
      </div>
      <Navbar />
      <div className="page grid grid--sidebar">
        <MobileMenu />
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
