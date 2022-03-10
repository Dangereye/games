import { useContext, forwardRef } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AppContext } from "../../../contexts/AppContext";
import { useRouter } from "next/router";
import Image from "next/image";
import ParentPlatforms from "../ParentPlatforms";
import MetacriticComponent from "../MetacriticComponent";
import DateComponent from "../DateComponent";

export default forwardRef(function GameCard({ game }, ref) {
  const { appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();

  const gameDetails = (id) => {
    appDispatch({ type: "LOADING" });
    router.push(`/game/${id}`);
  };

  return (
    <div
      ref={ref}
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
          width="250"
          height="150"
          layout="responsive"
          sizes="17vw"
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
});
