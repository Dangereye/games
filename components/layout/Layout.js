import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ darkMode, children }) {
  const theme = useContext(ThemeContext);
  console.log("Dark Mode?", darkMode);

  const style = {
    color: darkMode ? theme.dark.color : theme.light.color,
    bgc: darkMode ? theme.dark.background.a : theme.light.background.a,
  };
  return (
    <div
      style={{
        color: style.color,
        backgroundColor: style.bgc,
      }}
    >
      <Navbar bgc={style.bgc} />
      <div className="page grid grid--sidebar">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
