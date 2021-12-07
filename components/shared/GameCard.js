import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PlatformComponent from "./Platforms";
import Image from "next/image";

function GameCard({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="game-card"
      style={{ backgroundColor: themeState.background.tertiary }}
    >
      <div className="game-card__image">
        <Image
          src={game.background_image}
          width="150"
          height="100"
          layout="responsive"
          alt={game.name}
          blurDataURL={game.background_image}
          placeholder="blur"
        />
      </div>
      <div className="game-card__body">
        <PlatformComponent platforms={game.parent_platforms} />
        <div
          className="game-card__title"
          style={{ color: themeState.text.primary }}
        >
          {game.name}
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
