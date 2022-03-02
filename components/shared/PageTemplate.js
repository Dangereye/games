import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PageResults from "./PageResults";

function PageTemplate({ heading, children }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  return (
    <section style={{ color: themeState.text.primary }}>
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="display-title">{heading}</h1>
          <PageResults />
          {children}
        </>
      )}
    </section>
  );
}

export default PageTemplate;
