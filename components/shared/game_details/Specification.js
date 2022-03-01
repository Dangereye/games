import LinkGroup from "../links_list/LinkGroup.js";
import LinksList from "../links_list/LinksList.js";
import LinkItem from "../links_list/LinkItem.js";

function Specification({ game }) {
  return (
    <section className="specification">
      <h2 className="section-title hidden">Game Platforms, genres and Tags</h2>
      <LinkGroup title="Platforms">
        <LinksList condition={game.platforms}>
          {game.platforms.map((p, i) => (
            <LinkItem
              key={`platforms-${i}`}
              href={`/platforms/${p.platform.id}`}
              name={p.platform.name}
              icon
            />
          ))}
        </LinksList>
      </LinkGroup>
      <LinkGroup title="Genres">
        <LinksList condition={game.genres}>
          {game.genres.map((g, i) => (
            <LinkItem
              key={`genres-${i}`}
              href={`/genres/${g.id}`}
              name={g.name}
              icon
            />
          ))}
        </LinksList>
      </LinkGroup>
      <LinkGroup classes="grow shrink" title="Tags">
        <LinksList classes="fd-r" condition={game.tags}>
          {game.tags.map((t, i) => (
            <LinkItem
              key={`tags-${i}`}
              href={`/tags/${t.id}`}
              name={t.name}
              itemClasses="tag"
            />
          ))}
        </LinksList>
      </LinkGroup>
    </section>
  );
}
export default Specification;
