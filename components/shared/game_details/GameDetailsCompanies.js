import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import GameDetailsLink from "./GameDetailsLink";
import DateComponent from "../DateComponent";

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
      <GameDetailsLinkGroup title="Website" styles="s2">
        <a href={game.website} target="_blank" rel="noreferrer">
          {game.website}
        </a>
      </GameDetailsLinkGroup>
    </div>
  );
}
export default GameDetailsCompanies;
