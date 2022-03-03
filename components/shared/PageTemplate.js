import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Head from "next/head";
import PageResults from "./PageResults";

function PageTemplate({ title, children }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();
  console.log(`${router.pathname}: `, appState);

  return (
    <>
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          <Head>
            <title>{appState.data.seo_title}</title>
            <meta name="keywords" content={appState.data.seo_keywords} />
            <meta name="description" content={appState.data.seo_description} />
          </Head>
          <section style={{ color: themeState.text.primary }}>
            <h1 className="display-title">
              {title ? title : appState.data.seo_h1}
            </h1>
            <PageResults />
            {children}
          </section>
        </>
      )}
    </>
  );
}

PageTemplate.defaultProps = {
  title: false,
};

export default PageTemplate;
