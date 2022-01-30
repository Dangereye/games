import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import GameDetailsStat from "./GameDetailsStat";

function GameDetailsStats({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="game-details__stats"
      style={{ backgroundColor: themeState.background.secondary }}
    >
      <GameDetailsStat figure={game.playtime} stat="Playtime (hrs)" />
      <GameDetailsStat figure={game.metacritic} stat="Metacritic Score" />
      <GameDetailsStat figure={game.game_series_count} stat="Games in Series" />
      <GameDetailsStat figure={game.additions_count} stat="Additions" />
      <GameDetailsStat figure={game.achievements_count} stat="Achievements" />
    </div>
  );
}
export default GameDetailsStats;
