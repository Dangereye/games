import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Metacritic({ score }) {
  const { themeState } = useContext(ThemeContext);
  let color;
  const colorMeta = (num) => {
    if (num < 50) color = "#fc4b37";
    if (num >= 50 && num < 70) color = "#e4880f";
    if (num >= 70) color = "#86c232";
    return;
  };
  colorMeta(score);
  return (
    <>
      {score && (
        <div
          className="game-card__metacritic"
          style={{
            color: color,
            borderColor: color,
          }}
        >
          {score}
        </div>
      )}
    </>
  );
}

export default Metacritic;
