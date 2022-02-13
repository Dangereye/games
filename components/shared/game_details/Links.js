import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function Links({ title, styles, condition, children }) {
  const { themeState } = useContext(ThemeContext);
  const text = themeState.text;
  return (
    <div className={`game-details__links ${styles}`}>
      <h4 className="title" style={{ color: text.tertiary }}>
        {title}
      </h4>
      {condition ? children : "Unknown"}
    </div>
  );
}

Links.defaultProps = { title: "Title", styles: "" };

export default Links;
