import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function LinksList({ title, classes, condition, children, tags }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div className={tags ? "tags" : ""}>
      <h3
        className="section-subtitle"
        style={{ color: themeState.text.tertiary }}
      >
        {title}
      </h3>
      <ul className={`links-list ${classes}`}>
        {condition ? children : "N/A"}
      </ul>
    </div>
  );
}

LinksList.defaultProps = {
  title: "List Title",
  classes: "",
  condition: false,
  expand: false,
};

export default LinksList;
