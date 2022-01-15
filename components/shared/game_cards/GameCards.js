import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useRouter } from "next/router";
import useClientFetch from "../../../hooks/useClientFetch";
import filters from "../../../data/FilterData";
import Button from "../buttons/Button";
import GameCard from "./GameCard";
import Loader from "../Loader";
import FormatNumber from "../FormatNumber";

function GameCards({ title }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const addGames = useClientFetch();
  const router = useRouter();

  const fetchMore = () => {
    addGames(appState.data.next);
  };

  const updateFilter = (query, value) => {
    const { asPath } = router;
    router.push(`${asPath.split("?")[0]}?${query}=${value}`);
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
            <div className="filters">
              <div className="filter-menu">
                order by {appState.filters.order_by.value}
                <div className="filter-menu__options">
                  {filters.order_by.values.map((x) => (
                    <div
                      className="filter-menu__option"
                      onClick={() => updateFilter("ordering", x.value)}
                    >
                      {x.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export default GameCards;
