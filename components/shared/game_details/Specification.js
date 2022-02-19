import Links from "./Links";
import Link from "./Link";

function Specification({ game }) {
  return (
    <section className="specification grid">
      <Links title="Platforms" condition={game.platforms.length}>
        <ul className="list">
          {game.platforms.map((item, index) => (
            <li key={`platforms-${index}`}>
              <Link
                href={`/platforms/${item.platform.id}`}
                name={item.platform.name}
              />
            </li>
          ))}
        </ul>
      </Links>
      <Links title="Genres" condition={game.genres.length}>
        <ul className="list">
          {game.genres.map((item, index) => (
            <li key={`genres-${index}`}>
              <Link href={`/genres/${item.id}`} name={item.name} />
            </li>
          ))}
        </ul>
      </Links>
      <Links title="Tags" styles={"triple"} condition={game.tags.length}>
        <div className="tags">
          {game.tags.map((item, index) => (
            <div className="tag" key={`tags-${index}`}>
              <Link href={`/tags/${item.id}`} name={item.name} />
            </div>
          ))}
        </div>
      </Links>
    </section>
  );
}
export default Specification;
