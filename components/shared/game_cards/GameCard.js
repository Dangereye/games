import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AppContext } from "../../../contexts/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import ParentPlatforms from "./ParentPlatforms";
import GameCardMetacritic from "./GameCardMetacritic";
import GameCardDate from "./GameCardDate";

function GameCard({ game }) {
  const { appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();

  const gameDetails = (id) => {
    appDispatch({ type: "LOADING" });
    router.push(`/games/${id}`);
  };

  return (
    <div
      className="game-card"
      style={{
        color: themeState.text.tertiary,
        backgroundColor: themeState.background.secondary,
      }}
      onClick={() => gameDetails(game.slug)}
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
          <ParentPlatforms platforms={game.parent_platforms} />
          <GameCardMetacritic score={game.metacritic} />
        </div>

        <div
          className="game-card__title"
          style={{ color: themeState.text.primary }}
        >
          {game.name ? game.name : "Unknown"}
        </div>
        <GameCardDate date={game.released} />
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
