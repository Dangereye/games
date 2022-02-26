import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FiltersContext } from "../../../contexts/FiltersContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Button from "../buttons/Button";
import GameCard from "./GameCard";
import Loader from "../Loader";
import FormatNumber from "../FormatNumber";
import GameCardFilters from "./GameCardFilters";

function GameCards({ title, filters }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const { filtersState, filtersDispatch } = useContext(FiltersContext);
  const addContent = useClientFetch();

  const titleDates = filtersState.years.value
    ? ` in ${filtersState.years.name} `
    : "";
  const titleGenre = filtersState.genres.value
    ? `${filtersState.genres.name} `
    : "";

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  const closeFilters = () => {
    filtersDispatch({ type: "CLOSE_MENUS" });
  };

  return (
    <section
      className="section"
      style={{ color: themeState.text.primary }}
      onClick={closeFilters}
    >
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
            <div className="grid grid--cards mt">
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
  filters: null,
};

export default GameCards;
