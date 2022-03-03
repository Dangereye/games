import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import LinksList from "../../links_list/LinksList";
import LinkItem from "../../links_list/LinkItem.js";
import LinkGroup from "../../links_list/LinkGroup";

function Team({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section>
      <h2 className="section-title hidden">Developers and production teams</h2>
      <div className="team">
        <LinkGroup title="Developers">
          <LinksList condition={game.developers.length}>
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
          <LinksList condition={game.publishers.length}>
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
