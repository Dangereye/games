import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FiltersContext } from "../../../contexts/FiltersContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import PageResults from "../PageResults";
import GameCardFilters from "./GameCardFilters";
import GameCard from "./GameCard";
import Button from "../buttons/Button";

function GameCards({ title, filters }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const { filtersState, filtersDispatch } = useContext(FiltersContext);

  const addContent = useClientFetch();

  const Year = filtersState.years.value
    ? ` in ${filtersState.years.name} `
    : "";

  const Genre = filtersState.genres.value ? `${filtersState.genres.name} ` : "";

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  const closeFilters = () => {
    filtersDispatch({ type: "CLOSE_MENUS" });
  };

  return (
    <section style={{ color: themeState.text.primary }} onClick={closeFilters}>
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="display-title">{`${Genre}${title}${Year}`}</h1>
          <PageResults />
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
              classes="btn--large btn--primary btn--center mt-4"
              func={fetchMore}
            />
          )}
        </>
      )}
    </section>
  );
}

GameCards.defaultProps = {
  title: "Unknown",
  filters: null,
};

export default GameCards;
