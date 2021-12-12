import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PlatformComponent from "./Platforms";
import Image from "next/image";
import Metacritic from "./Metacritic";

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
          alt={game.name}
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
          <PlatformComponent platforms={game.parent_platforms} />
          <Metacritic score={game.metacritic} />
        </div>

        <div
          className="game-card__title"
          style={{ color: themeState.text.primary }}
        >
          {game.name}
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
