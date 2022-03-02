import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function FilterSubMenu({ subtitle, children }) {
  const { themeState } = useContext(ThemeContext);

  return (
    <>
      {subtitle && (
        <div
          className="filters__title"
          style={{ color: themeState.text.tertiary }}
        >
          {subtitle}
        </div>
      )}
      {children}
    </>
  );
}
export default FilterSubMenu;
