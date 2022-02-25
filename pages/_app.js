import "../styles/globals.scss";
import AppComponent from "../contexts/AppContext";
import ThemeComponent from "../contexts/ThemeContext";
import Layout from "../components/layout/Layout";
import FiltersComponent from "../contexts/FiltersContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppComponent>
      <ThemeComponent>
        <FiltersComponent>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FiltersComponent>
      </ThemeComponent>
    </AppComponent>
  );
}

export default MyApp;
