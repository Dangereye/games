import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import DateComponent from "../DateComponent";
import GenresComponent from "../GenresComponent";
import ParentPlatforms from "../ParentPlatforms";

function GameDetailsInfoBanner({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="game-details__info-banner"
      style={{
        color: themeState.text.secondary,
        fill: themeState.text.secondary,
      }}
    >
      <DateComponent date={game.released} fullDate />
      <GenresComponent genres={game.genres} />
      <ParentPlatforms platforms={game.parent_platforms} />
    </div>
  );
}
export default GameDetailsInfoBanner;
