import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FiltersContext } from "../../../contexts/FiltersContext";
import { MdArrowDropDown } from "react-icons/md";

function FilterMenu({ name, active, title, subtitle, value, children }) {
  const { filtersDispatch } = useContext(FiltersContext);
  const { themeState } = useContext(ThemeContext);

  const openFilter = (e) => {
    e.stopPropagation();
    filtersDispatch({ type: "CLOSE_MENUS" });
    filtersDispatch({ type: "OPEN_MENU", payload: name });
  };

  return (
    <div
      className="filters__menu"
      style={{
        color: themeState.text.primary,
        backgroundColor: themeState.background.secondary,
      }}
      onClick={openFilter}
    >
      <div className="filters__parent-element">
        <span className="filter">{title}</span>
        <span className="value">{value}</span>
        <div className="icon">
          <MdArrowDropDown />
        </div>
      </div>
      <div
        className={active ? "filters__options active" : "filters__options"}
        style={{ backgroundColor: themeState.background.secondary }}
      >
        <div
          className="filters__title"
          style={{ color: themeState.text.tertiary }}
        >
          {subtitle}
        </div>
        {children}
      </div>
    </div>
  );
}

FilterMenu.defaultProps = {
  active: false,
  title: "Title",
  subtitle: "Select",
  value: "All",
  children: <p>Children...</p>,
};
export default FilterMenu;
