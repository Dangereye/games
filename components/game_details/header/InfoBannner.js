import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import DateComponent from "../../shared/DateComponent";
import ParentPlatforms from "../../shared/ParentPlatforms";

function InfoBanner({ game }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="info-banner"
      style={{
        color: themeState.text.secondary,
        fill: themeState.text.secondary,
      }}
    >
      <DateComponent date={game.released} fullDate />
      <ParentPlatforms platforms={game.parent_platforms} />
    </div>
  );
}
export default InfoBanner;
