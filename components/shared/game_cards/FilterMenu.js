import { useState, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { RiArrowDropDownLine } from "react-icons/ri";

function FilterMenu({ title, activeFilter, values, dispatch, query }) {
  const [isActive, setIsActive] = useState(false);
  const { appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const openFilter = (e) => {
    e.target.focus();
    setIsActive(true);
  };

  const activateFilter = (dispatch, query, name, value) => {
    appDispatch({ type: dispatch, payload: { query, name, value } });
    setIsActive(false);
  };

  const closeFilter = () => {
    setIsActive(false);
  };

  return (
    <div
      tabIndex="-1"
      className="filter-menu"
      style={{ backgroundColor: themeState.background.secondary }}
      onClick={openFilter}
      onBlur={closeFilter}
    >
      <div className="filter-menu__active-element">
        {title}
        <span>{activeFilter}</span>
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
      <div
        className={
          isActive ? "filter-menu__options active" : "filter-menu__options"
        }
        style={{ backgroundColor: themeState.background.secondary }}
      >
        <div
          className="filter-menu__option-title"
          style={{ color: themeState.text.tertiary }}
        >
          Select
        </div>
        {values.map((x) => (
          <div
            key={`filter-${x.name}`}
            className="filter-menu__option"
            onClick={() => activateFilter(dispatch, query, x.name, x.value)}
          >
            {x.name}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FilterMenu;
