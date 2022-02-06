import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

function Stat({ figure, stat, condition }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <>
      {condition && (
        <div className="stats__group">
          <div className="figure" style={{ color: themeState.text.primary }}>
            {figure}
          </div>
          <div className="stat" style={{ color: themeState.text.tertiary }}>
            {stat}
          </div>
        </div>
      )}
    </>
  );
}
export default Stat;
