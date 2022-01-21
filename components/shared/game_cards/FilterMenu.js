import { useState, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { RiArrowDropDownLine } from "react-icons/ri";

function FilterMenu({ title, subtitle, activeFilter, children }) {
  const [isActive, setIsActive] = useState(false);
  const { themeState } = useContext(ThemeContext);

  const openFilter = (e) => {
    e.target.focus();
    setIsActive(true);
  };

  const closeFilter = () => {
    setIsActive(false);
  };

  return (
    <div
      tabIndex="-1"
      className="filters__menu"
      style={{ backgroundColor: themeState.background.secondary }}
      onClick={openFilter}
      onBlur={closeFilter}
    >
      <div className="filters__parent-element">
        {title}
        <span>{activeFilter}</span>
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
      <div
        className={isActive ? "filters__options active" : "filters__options"}
        style={{ backgroundColor: themeState.background.secondary }}
      >
        {subtitle && (
          <div
            className="filters__title"
            style={{ color: themeState.text.tertiary }}
          >
            {subtitle}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
export default FilterMenu;
