import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function GameDetailsLinkGroup({ title, styles, children }) {
  const { themeState } = useContext(ThemeContext);
  const text = themeState.text;
  return (
    <div className={`game-details__links-group ${styles}`}>
      <h4 className="title" style={{ color: text.tertiary }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

GameDetailsLinkGroup.defaultProps = { title: "Title", styles: "" };

export default GameDetailsLinkGroup;
