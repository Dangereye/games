import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function LinkGroup({ classes, styles, title, children }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div className={`link-group ${classes}`} style={styles}>
      <h3
        className="section-subtitle"
        style={{ color: themeState.text.tertiary }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
LinkGroup.defaultProps = {
  classes: "",
  styles: { flexBasis: "30rem" },
  title: "Group Title",
};
export default LinkGroup;
