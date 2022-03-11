import { useContext, forwardRef } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import ParentPlatforms from "../ParentPlatforms";
import MetacriticComponent from "../MetacriticComponent";
import DateComponent from "../DateComponent";

export default forwardRef(function GameCard({ game }, ref) {
  const { themeState } = useContext(ThemeContext);

  return (
    <Link href={`/game/${game.slug}`} ref={ref}>
      <a
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
                : "/images/missing-image-game-card.jpg"
            }
            layout="fill"
            sizes="17vw"
            alt={game.name ? game.name : "Unknown game image."}
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

          <div
            className="card-title"
            style={{ color: themeState.text.primary }}
          >
            <span className="text">
              {game.name ? game.name : "Untitled Game"}
            </span>
          </div>
          <DateComponent date={game.released} />
        </div>
      </a>
    </Link>
  );
});
