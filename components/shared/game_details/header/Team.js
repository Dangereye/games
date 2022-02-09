import GameDetailsLink from ".././GameDetailsLink";
import GameDetailsLinkGroup from ".././GameDetailsLinkGroup";

function Team({ game }) {
  return (
    <section className="team">
      <GameDetailsLinkGroup title="Developers">
        <ul className="list">
          {game.developers.map((x, index) => (
            <li key={`developers-${index}`}>
              <GameDetailsLink href={`/developers/${x.slug}`} name={x.name} />
            </li>
          ))}
        </ul>
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Publishers">
        <ul className="list">
          {game.publishers.map((x, index) => (
            <li key={`publishers-${index}`}>
              <GameDetailsLink href={`/publishers/${x.slug}`} name={x.name} />
            </li>
          ))}
        </ul>
      </GameDetailsLinkGroup>
      <GameDetailsLinkGroup title="Website">
        <a
          className="btn btn--small"
          href={game.website}
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
      </GameDetailsLinkGroup>
    </section>
  );
}
export default Team;
