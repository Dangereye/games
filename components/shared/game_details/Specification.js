import LinksList from "../links_list/LinksList.js";
import LinkItem from "../links_list/LinkItem.js";

function Specification({ game }) {
  return (
    <section className="specification grid">
      <LinksList title="Platforms" condition={game.platforms.length}>
        {game.platforms.map((item, index) => (
          <LinkItem
            key={`platforms-${index}`}
            href={`/platforms/${item.platform.id}`}
            name={item.platform.name}
            icon
          />
        ))}
      </LinksList>
      <LinksList title="Genres" condition={game.genres.length}>
        {game.genres.map((item, index) => (
          <LinkItem
            key={`genres-${index}`}
            href={`/genres/${item.id}`}
            name={item.name}
            icon
          />
        ))}
      </LinksList>
      <LinksList
        title="Tags"
        classes={"tags"}
        condition={game.tags.length}
        tags
      >
        {game.tags.map((item, index) => (
          <LinkItem
            key={`tags-${index}`}
            href={`/tags/${item.id}`}
            classes="tags"
            name={item.name}
          />
        ))}
      </LinksList>
    </section>
  );
}
export default Specification;
