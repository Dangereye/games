import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AppContext } from "../../../contexts/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import ParentPlatforms from "../ParentPlatforms";
import MetacriticComponent from "../MetacriticComponent";
import DateComponent from "../DateComponent";

function GameCard({ game }) {
  const { appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();

  const gameDetails = (id) => {
    appDispatch({ type: "LOADING" });
    router.push(`/game/${id}`);
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
              : "/images/missing-image-game-card.jpg"
          }
          width="200"
          height="112.5"
          layout="responsive"
          alt={game.name ? game.name : "Unknown game image."}
          blurDataURL={
            game.background_image
              ? game.background_image
              : "/images/missing-image-game-card.jpg"
          }
          placeholder="blur"
        />
      </div>
      <div className="game-card__body">
        <div
          className="game-card__header"
          style={{ fill: themeState.text.secondary }}
        >
          <ParentPlatforms platforms={game.parent_platforms} limit />
          <MetacriticComponent score={game.metacritic} />
        </div>

        <div className="card-title" style={{ color: themeState.text.primary }}>
          <span className="text">
            {game.name ? game.name : "Untitled Game"}
          </span>
        </div>
        <DateComponent date={game.released} />
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
