import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import GameDetailsLink from "./GameDetailsLink";

function GameDetailsCompanies({ game }) {
  return (
    <div className="grid grid--multiple mt">
      <GameDetailsLinkGroup title="Publishers">
        {game.publishers.map((x) => (
          <GameDetailsLink
            href={`/publishers/${x.id}`}
            key={`publisher-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Developers">
        {game.developers.map((x) => (
          <GameDetailsLink
            href={`/developers/${x.id}`}
            key={`developer-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Website">
        <a
          href={game.website}
          className="btn btn--large btn--primary"
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
      </GameDetailsLinkGroup>
    </div>
  );
}
export default GameDetailsCompanies;
