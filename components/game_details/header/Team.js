import LinkGroup from "../../shared/links_list/LinkGroup";
import LinksList from "../../shared/links_list/LinksList";
import LinkItem from "../../shared/links_list/LinkItem.js";

function Team({ game }) {
  return (
    <section>
      <h2 className="section-title hidden">Developers and production teams</h2>
      <div className="team">
        <LinkGroup title="Developers">
          <LinksList condition={game.developers && game.developers.length > 0}>
            {game.developers.map((d, i) => (
              <LinkItem
                key={`developers-${i}`}
                href={`/developers/${d.slug}`}
                name={d.name}
                icon
              />
            ))}
          </LinksList>
        </LinkGroup>
        <LinkGroup title="Publishers">
          <LinksList condition={game.publishers && game.publishers.length > 0}>
            {game.publishers.map((p, i) => (
              <LinkItem
                key={`publishers-${i}`}
                href={`/publishers/${p.slug}`}
                name={p.name}
                icon
              />
            ))}
          </LinksList>
        </LinkGroup>
        <LinkGroup title="Website">
          {game.website && game.website !== "" ? (
            <a
              className="btn btn--small btn--primary"
              href={game.website}
              target="_blank"
              rel="noreferrer"
            >
              Visit
            </a>
          ) : (
            "N/A"
          )}
        </LinkGroup>
      </div>
    </section>
  );
}
export default Team;
