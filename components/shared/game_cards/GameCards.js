import { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Loader from "../Loader";
import GameCard from "./GameCard";
import Button from "../buttons/Button";

function GameCards({ condition, title, subtitle, list, limited }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const [limit, setLimit] = useState(limited);
  const [element, setElement] = useState(null);

  const addContent = useClientFetch();

  const data = list ? list : appState.data.results;

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  const toggleAmount = () => {
    setLimit(!limit);
  };

  const options = { rootMargin: "800px" };

  const callBack = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      fetchMore();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);

    if (appState.infinite_scroll && element) {
      observer.observe(element);
    }

    return () => {
      if (appState.infinite_scroll && element) {
        observer.unobserve(element);
      }
    };
  }, [element]);

  return (
    <>
      {condition && (
        <section style={{ color: themeState.text.primary }}>
          <h2 className="section-title hidden">{title}</h2>
          {subtitle && (
            <h3
              className="section-subtitle"
              style={{ color: themeState.text.tertiary }}
            >
              {subtitle}
            </h3>
          )}
          <div className="grid grid--cards">
            {(limit ? data.filter((game, i) => i < 5) : data).map((game) => (
              <GameCard ref={setElement} game={game} key={game.id} />
            ))}
          </div>
          {appState.isLoadingMore && <Loader />}
          {appState.data.next &&
            !appState.isLoadingMore &&
            !limit &&
            !appState.infinite_scroll && (
              <Button
                name="Load More"
                classes="btn--large btn--primary btn--center mt-4"
                func={fetchMore}
              />
            )}
          {data.length > 5 && limited && (
            <Button
              name={limit ? "Show More" : "Show Less"}
              classes="btn--more"
              func={toggleAmount}
            />
          )}
        </section>
      )}
    </>
  );
}

GameCards.defaultProps = {
  condition: true,
  title: "Section Title",
  subtitle: false,
  list: false,
  limited: false,
};

export default GameCards;
