import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import PageResults from "../PageResults";
import Button from "../buttons/Button";

function MiscCards({ title, children }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const addContent = useClientFetch();

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  return (
    <section className="misc-cards" style={{ color: themeState.text.primary }}>
      <div className="container">
        {appState.isLoading ? (
          <Loader />
        ) : appState.error.isError ? (
          <ErrorMessage />
        ) : (
          <>
            <h1 className="display-title">{title}</h1>
            <PageResults />
            <div className="misc-cards__list grid">{children}</div>
            {appState.isLoadingMore && <Loader />}
            {appState.data.next && !appState.isLoadingMore && (
              <Button
                name="Load More"
                styles="btn--large btn--accent btn--center"
                func={fetchMore}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
export default MiscCards;
