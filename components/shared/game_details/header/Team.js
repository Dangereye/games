import Links from ".././Links";
import Link from ".././Link";

function Team({ game }) {
  return (
    <section className="team grid">
      <Links title="Developers" condition={game.developers.length}>
        <ul className="list">
          {game.developers.map((x, index) => (
            <li key={`developers-${index}`}>
              <Link href={`/developers/${x.slug}`} name={x.name} />
            </li>
          ))}
        </ul>
      </Links>
      <Links title="Publishers" condition={game.publishers.length}>
        <ul className="list">
          {game.publishers.map((x, index) => (
            <li key={`publishers-${index}`}>
              <Link href={`/publishers/${x.slug}`} name={x.name} />
            </li>
          ))}
        </ul>
      </Links>
      <Links title="Website" condition={game.website && game.website !== ""}>
        <a
          className="btn btn--small btn--accent"
          href={game.website}
          target="_blank"
          rel="noreferrer"
        >
          Visit
        </a>
      </Links>
    </section>
  );
}
export default Team;
