import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FiltersContext } from "../../../contexts/FiltersContext";
import { RiArrowDropDownLine } from "react-icons/ri";

function FilterMenu({ name, state, title, subtitle, activeFilter, children }) {
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
      style={{ backgroundColor: themeState.background.secondary }}
      onClick={openFilter}
    >
      <div className="filters__parent-element">
        <span>{title}</span>
        <span>{activeFilter}</span>
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
      <div
        className={state ? "filters__options active" : "filters__options"}
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
  state: null,
  title: "Title",
  subtitle: "Select",
  activeFilter: "All",
  children: <p>Children...</p>,
};
export default FilterMenu;
