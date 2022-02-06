import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import Stat from "./Stat";

function Stats({ game, series, additions, achievements }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section
      className="stats"
      style={{ backgroundColor: themeState.background.tertiary }}
    >
      <Stat
        figure={`${game.metacritic}%`}
        stat="Metacritic Score"
        condition={game.metacritic !== null}
      />
      <Stat
        figure={`${game.playtime}h`}
        stat="Avg. Playtime"
        condition={game.playtime > 0}
      />
      <Stat
        figure={series.count}
        stat="Games in Series"
        condition={series.count > 0}
      />
      <Stat
        figure={additions.count}
        stat="# of Additions"
        condition={additions.count > 0}
      />
      <Stat
        figure={achievements.count}
        stat="Achievements"
        condition={achievements.count > 0}
      />
    </section>
  );
}
export default Stats;
