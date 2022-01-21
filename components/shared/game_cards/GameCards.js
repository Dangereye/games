import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Button from "../buttons/Button";
import GameCard from "./GameCard";
import Loader from "../Loader";
import FormatNumber from "../FormatNumber";
import GameCardFilters from "./GameCardFilters";

function GameCards({ title, years }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  const addGames = useClientFetch();

  const fetchMore = () => {
    addGames(appState.data.next);
  };

  const openFilter = (e) => {
    e.target.focus();
    setIsActive(true);
  };

  const activateFilter = (dispatch, query, name, value) => {
    appDispatch({ type: dispatch, payload: { query, name, value } });
    setIsActive(false);
  };

  const closeFilter = () => {
    setIsActive(false);
  };

  return (
    <section className="section" style={{ color: themeState.text.primary }}>
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
            <h1 className="display">
              {appState.data.seo_h1 ? appState.data.seo_h1 : title}
            </h1>
            <p className="page-results">
              Found <FormatNumber num={appState.data.count} /> results.
            </p>
            <GameCardFilters years={years} />
            <div className="grid grid--multiple mt">
              {appState.data.results.map((game) => (
                <GameCard game={game} key={game.id} />
              ))}
            </div>
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

GameCards.defaultProps = {
  title: "Unknown",
  years: [],
};

export default GameCards;
