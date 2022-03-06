import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext.js";
import LinkGroup from "../links_list/LinkGroup.js";
import LinksList from "../links_list/LinksList.js";
import LinkItem from "../links_list/LinkItem.js";

function Specification({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section style={{ color: themeState.text.primary }}>
      <h2 className="section-title hidden">Game Platforms, genres and Tags</h2>
      <div className="specification">
        <LinkGroup title="Platforms">
          <LinksList condition={game.platforms && game.platforms.length > 0}>
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
          <LinksList condition={game.genres && game.genres.length > 0}>
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
          <LinksList
            classes="fd-r"
            condition={game.tags && game.tags.length > 0}
          >
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
      </div>
    </section>
  );
}
export default Specification;
