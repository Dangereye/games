import { useState, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Loader from "../Loader";
import GameCard from "./GameCard";
import Button from "../buttons/Button";

function GameCards({ title, showTitle, subtitle, showSubtitle, limited }) {
  const [limit, setLimit] = useState(limited);
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const addContent = useClientFetch();

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  const toggleAmount = () => {
    setLimit(!limit);
  };

  return (
    <section style={{ color: themeState.text.primary }}>
      <h2 className={showTitle ? "section-title" : "section-title hidden"}>
        {title}
      </h2>
      <h3
        className={
          showSubtitle ? "section-subtitle" : "section-subtitle hidden"
        }
      >
        {subtitle}
      </h3>
      <div className="grid grid--cards">
        {(limit
          ? appState.data.results.filter((game, i) => i < 5)
          : appState.data.results
        ).map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
      {appState.isLoadingMore && <Loader />}
      {appState.data.next && !appState.isLoadingMore && !limit && (
        <Button
          name="Load More"
          classes="btn--large btn--primary btn--center mt-4"
          func={fetchMore}
        />
      )}
      {appState.data.results.length > 5 && limited && (
        <Button
          name={limit ? "Show More" : "Show Less"}
          classes="btn--more"
          func={toggleAmount}
        />
      )}
    </section>
  );
}

GameCards.defaultProps = {
  title: "Section Title",
  showTitle: false,
  subtitle: "Section Subtitle",
  showSubtitle: false,
  limited: false,
};

export default GameCards;
