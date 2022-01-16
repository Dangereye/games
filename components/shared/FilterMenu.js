import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";

function FilterMenu({ title, values, dispatch, query }) {
  const [isActive, setIsActive] = useState(false);
  const { appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const activateFilter = (dispatch, query, name, value) => {
    appDispatch({ type: dispatch, payload: { query, name, value } });
    setIsActive(false);
  };

  return (
    <div
      className="filter-menu"
      style={{ backgroundColor: themeState.background.secondary }}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="filter-menu__active-element">{title}</div>
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
