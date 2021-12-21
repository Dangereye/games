import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import GameCardPlatforms from "./GameCardPlatforms";
import Image from "next/image";
import GameCardMetacritic from "./GameCardMetacritic";

function GameCard({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="game-card"
      style={{
        color: themeState.text.tertiary,
        backgroundColor: themeState.background.secondary,
      }}
    >
      <div className="game-card__image">
        <Image
          src={
            game.background_image
              ? game.background_image
              : "/images/missing-image.jpg"
          }
          width="200"
          height="112.5"
          layout="responsive"
          alt={game.name ? game.name : "Unknown"}
          blurDataURL={
            game.background_image
              ? game.background_image
              : "/images/missing-image.jpg"
          }
          placeholder="blur"
        />
      </div>
      <div className="game-card__body">
        <div className="game-card__platforms">
          <GameCardPlatforms platforms={game.parent_platforms} />
          <GameCardMetacritic score={game.metacritic} />
        </div>

        <div
          className="game-card__title"
          style={{ color: themeState.text.primary }}
        >
          {game.name ? game.name : "Unknown"}
        </div>
        <div className="game-card__date">
          {game.released ? game.released.substring(0, 4) : "TBC"}
        </div>
      </div>
    </div>
  );
}

GameCard.defaultProps = {
  game: {
    background_image: "/images/missing-image.jpg",
    name: "Unknown",
    parent_platforms: [],
  },
};
export default GameCard;
