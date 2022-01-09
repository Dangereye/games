import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import GameDetailsLink from "./GameDetailsLink";
import DateComponent from "../DateComponent";

function GameDetailsSpecs({ game, series }) {
  return (
    <div className="game-details__specs grid grid--multiple mt">
      <GameDetailsLinkGroup title="Released">
        <DateComponent date={game.released} fullDate />
      </GameDetailsLinkGroup>
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
      <GameDetailsLinkGroup title="Game Series" styles="s2">
        {series.map((x) => (
          <GameDetailsLink
            href={`/games/${x.slug}`}
            key={`game-${x.id}`}
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
