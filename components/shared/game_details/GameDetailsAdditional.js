import GameDetailsLinkGroup from "./GameDetailsLinkGroup";
import GameDetailsLink from "./GameDetailsLink";

function GameDetailsAdditional({ game, series }) {
  return (
    <div className="game-details__specs grid grid--game-specs mt">
      <GameDetailsLinkGroup title="Games Series" styles="s2">
        {series.map((x) => (
          <GameDetailsLink
            href={`/game/${x.slug}`}
            key={`game-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>

      <GameDetailsLinkGroup title="Tags" styles="s2">
        {game.tags.map((x) => (
          <GameDetailsLink
            href={`/tags/${x.slug}`}
            key={`tag-${x.id}`}
            name={x.name}
          />
        ))}
      </GameDetailsLinkGroup>
    </div>
  );
}
export default GameDetailsAdditional;
