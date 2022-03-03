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
  console.log(`${router.asPath}: `, appState);

  return (
    <>
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          <Head>
            <title>Games | {appState.data.seo_title}</title>
            <meta name="keywords" content={appState.data.seo_keywords} />
            <meta name="description" content={appState.data.seo_description} />
          </Head>
          <header style={{ color: themeState.text.primary }}>
            <h1 className="display-title">
              {appState.data.seo_h1} {title}
            </h1>
            <PageResults />
          </header>
          {children}
        </>
      )}
    </>
  );
}

PageTemplate.defaultProps = {
  title: false,
};

export default PageTemplate;
