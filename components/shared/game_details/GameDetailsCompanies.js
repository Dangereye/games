import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import Link from "next/link";

function GameDetailsCompanies({ game }) {
  return (
    <div className="grid grid--multiple mt">
      <GameDetailsLinkGroup title="Publishers">
        {game.publishers.map((x) => (
          <Link href={`/publishers/${x.id}`} key={x.id}>
            <a className="game-details__links-group__link">{x.name}</a>
          </Link>
        ))}
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Developers">
        {game.developers.map((x) => (
          <Link href={`/developers/${x.id}`} key={x.id}>
            <a className="game-details__links-group__link">{x.name}</a>
          </Link>
        ))}
      </GameDetailsLinkGroup>
      <div className="game-details__website">
        <h3>Website</h3>
        <a
          href={game.website}
          className="btn btn--large btn--primary"
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
export default GameDetailsCompanies;
