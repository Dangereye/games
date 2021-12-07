import "../styles/globals.scss";
import AppComponent from "../contexts/AppContext";
import ThemeComponent from "../contexts/ThemeContext";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppComponent>
      <ThemeComponent>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeComponent>
    </AppComponent>
  );
}

export default MyApp;
