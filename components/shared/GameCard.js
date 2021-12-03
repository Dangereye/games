import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PlatformComponent from "./Platforms";
import Image from "next/image";

function GameCard({ game }) {
  const { state } = useContext(ThemeContext);
  return (
    <div
      className="game-card"
      style={{ backgroundColor: state.background.tertiary }}
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
        <div className="game-card__title" style={{ color: state.text.primary }}>
          {game.name}
        </div>
      </div>
    </div>
  );
}

GameCard.defaultprops = {
  game: {
    background_image: "/images/missing-image.jpg",
    name: "Unknown",
    parent_platforms: [],
  },
};
export default GameCard;
