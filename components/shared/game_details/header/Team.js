import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import LinksList from "../../links_list/LinksList";
import LinkItem from "../../links_list/LinkItem.js";

function Team({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section className="team grid">
      <h2 className="section-title hidden">
        Game development and production team
      </h2>
      <LinksList title="Developers" condition={game.developers.length}>
        {game.developers.map((x, index) => (
          <LinkItem
            key={`developers-${index}`}
            href={`/developers/${x.slug}`}
            name={x.name}
            icon
          />
        ))}
      </LinksList>
      <LinksList title="Publishers" condition={game.publishers.length}>
        {game.publishers.map((x, index) => (
          <LinkItem
            key={`publishers-${index}`}
            href={`/publishers/${x.slug}`}
            name={x.name}
            icon
          />
        ))}
      </LinksList>
      <div>
        <h3
          className="section-subtitle"
          style={{ color: themeState.text.tertiary }}
        >
          Website
        </h3>
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
      </div>
    </section>
  );
}
export default Team;
