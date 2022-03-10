import react from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Head from "next/head";
import PageResults from "./PageResults";

function PageTemplate({ title, postTitle, children }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  return (
    <>
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          <Head>
            <title>Games | {title ? title : appState.data.seo_title}</title>
            <meta
              name="keywords"
              content={title ? "" : appState.data.seo_keywords}
            />
            <meta
              name="description"
              content={title ? "" : appState.data.seo_description}
            />
          </Head>
          {console.log("PageTemplate was built.")}
          <header style={{ color: themeState.text.primary }}>
            <h1 className="display-title">
              {title ? title : appState.data.seo_h1} {postTitle}
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
  postTile: false,
};

export default react.memo(PageTemplate);
