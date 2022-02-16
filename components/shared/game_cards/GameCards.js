import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Button from "../buttons/Button";
import GameCard from "./GameCard";
import Loader from "../Loader";
import FormatNumber from "../FormatNumber";
import GameCardFilters from "./GameCardFilters";

function GameCards({ title, filters }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  const addGames = useClientFetch();
  const titleDates = appState.filters.dates.value
    ? ` in ${appState.filters.dates.name} `
    : "";
  const titleGenre = appState.filters.genres.value
    ? `${appState.filters.genres.name} `
    : "";

  const fetchMore = () => {
    addGames(appState.data.next);
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
            <h1 className="display">{`${titleGenre}${title}${titleDates}`}</h1>
            <p
              className="page-results"
              style={{ color: themeState.text.tertiary }}
            >
              Found <FormatNumber num={appState.data.count} /> results.
            </p>
            <GameCardFilters filters={filters} />
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
