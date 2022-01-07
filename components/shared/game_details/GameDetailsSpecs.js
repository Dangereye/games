import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import Link from "next/link";

function GameDetailsSpecs({ game }) {
  return (
    <div className="game-details__specs grid grid--multiple mt">
      <GameDetailsLinkGroup title="Platforms">
        {game.platforms.map((x) => (
          <Link href={`/platforms/${x.platform.id}`} key={x.platform.id}>
            <a className="game-details__links-group__link">{x.platform.name}</a>
          </Link>
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Genres">
        {game.genres.map((x) => (
          <Link href={`/genres/${x.slug}`} key={`genre-${x.id}`}>
            <a className="game-details__links-group__link">{x.name}</a>
          </Link>
        ))}
      </GameDetailsLinkGroup>
    </div>
  );
}
export default GameDetailsSpecs;
