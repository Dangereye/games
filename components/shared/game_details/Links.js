import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function Links({ title, styles, condition, children }) {
  const { themeState } = useContext(ThemeContext);
  const text = themeState.text;
  return (
    <div className={`game-details__links ${styles}`}>
      <h3 className="section-subtitle" style={{ color: text.tertiary }}>
        {title}
      </h3>
      {condition ? children : "N/A"}
    </div>
  );
}

Links.defaultProps = { title: "Title", styles: "" };

export default Links;
