import ThemeComponent from "../contexts/ThemeContext";
import "../styles/globals.scss";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeComponent>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeComponent>
  );
}

export default MyApp;
