import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import GameDetailsLink from "./GameDetailsLink";

function GameDetailsSpecs({ game }) {
  return (
    <div className="game-details__specs grid grid--multiple mt">
      <GameDetailsLinkGroup title="Platforms">
        {game.platforms.map((x) => (
          <GameDetailsLink
            href={`/platforms/${x.platform.id}`}
            key={`platform-${x.platform.id}`}
            name={x.platform.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Genres">
        {game.genres.map((x) => (
          <GameDetailsLink
            href={`/genres/${x.slug}`}
            key={`genre-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Tags" styles="s2">
        {game.tags.map((x) => (
          <GameDetailsLink
            href={`/tags/${x.slug}`}
            key={`tag-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
    </div>
  );
}
export default GameDetailsSpecs;
