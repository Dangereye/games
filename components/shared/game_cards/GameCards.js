import { useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import useStatus from "../../../hooks/useStatus";
import Button from "../buttons/Button";
import GameCard from "./GameCard";
import Loader from "../Loader";

function GameCards({ data, status, title }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();
  const addGames = useClientFetch();

  const fetchMore = () => {
    addGames(appState.data.next);
  };

  useEffect(() => {
    validateStatus(data, status);
  }, [data]);

  return (
    <section className="section" style={{ color: themeState.text.primary }}>
      <div className="container">
        {appState.isLoading ? (
          <Loader />
        ) : appState.error.isError ? (
          <>
            <h1 className="page-title">
              Network error{appState.error.status}.
            </h1>
            <p>{appState.error.message}.</p>
          </>
        ) : (
          <>
            <h1 className="page-title">
              {appState.data.seo_h1 ? appState.data.seo_h1 : title}
            </h1>
            <div className="grid grid--multiple">
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
