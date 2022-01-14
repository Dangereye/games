import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import GameDetailsLink from "./GameDetailsLink";
import DateComponent from "../DateComponent";

function GameDetailsSpecs({ game }) {
  return (
    <div className="grid grid--game-specs mt">
      <GameDetailsLinkGroup title="Released">
        <DateComponent date={game.released} fullDate />
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
      <GameDetailsLinkGroup title="Platforms" styles="s2">
        {game.platforms.map((x) => (
          <GameDetailsLink
            href={`/platforms/${x.platform.id}`}
            key={`platform-${x.platform.id}`}
            name={x.platform.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Publishers" styles="s2">
        {game.publishers.map((x) => (
          <GameDetailsLink
            href={`/publishers/${x.id}`}
            key={`publisher-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Developers" styles="s2">
        {game.developers.map((x) => (
          <GameDetailsLink
            href={`/developers/${x.id}`}
            key={`developer-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Website" styles="s2">
        <a href={game.website} target="_blank" rel="noreferrer">
          {game.website}
        </a>
      </GameDetailsLinkGroup>
    </div>
  );
}
export default GameDetailsSpecs;
