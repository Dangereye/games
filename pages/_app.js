import "../styles/globals.scss";
import AppComponent from "../contexts/AppContext";
import ThemeComponent from "../contexts/ThemeContext";
import Layout from "../components/layout/Layout";
import FiltersComponent from "../contexts/FiltersContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Games | Video Game Database</title>
        <meta name="author" content="Craig Puxty" />
        <meta
          name="description"
          content="Video game database and discovery service - powered by RAWG.IO"
        />
      </Head>
      <AppComponent>
        <ThemeComponent>
          <FiltersComponent>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FiltersComponent>
        </ThemeComponent>
      </AppComponent>
    </>
  );
}

export default MyApp;
