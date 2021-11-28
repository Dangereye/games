import { useState } from "react";
import ThemeComponent from "../contexts/ThemeContext";
import "../styles/globals.scss";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState("light");
  return (
    <ThemeComponent>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Component {...pageProps} />
      </Layout>
    </ThemeComponent>
  );
}

export default MyApp;
