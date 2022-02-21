import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import FormatNumber from "../FormatNumber";
import Loader from "../Loader";

function MiscCards({ title, children }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const addGames = useClientFetch();

  const fetchMore = () => {
    addGames(appState.data.next);
  };
  return (
    <section className="misc-cards" style={{ color: themeState.text.primary }}>
      <div className="container">
        {appState.isLoading ? (
          <Loader />
        ) : appState.error.isError ? (
          <>
            <h1 className="page-title">Network error.</h1>
            <p>{appState.error.message}.</p>
          </>
        ) : (
          <>
            <h1 className="display">{title}</h1>
            <p
              className="page-results"
              style={{ color: themeState.text.tertiary }}
            >
              Found <FormatNumber num={appState.data.count} /> results.
            </p>
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
