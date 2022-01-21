import { useState, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import filterData from "../../../data/FilterData";
import FilterMenu from "./FilterMenu";
import FilterSubMenu from "./FilterSubMenu";

function GameCardFilters({ years }) {
  const { appState, appDispatch } = useContext(AppContext);
  //   console.log("GameCardFilters: ", years);

  const activateFilter = (dispatch, name, value) => {
    appDispatch({ type: dispatch, payload: { name, value } });
  };

  return (
    <div className="filters">
      <FilterMenu
        title={"Ordered by:"}
        subtitle="select"
        activeFilter={appState.filters.ordering.name}
      >
        {filterData.ordering_values.map((x, index) => (
          <div
            key={`ordering-filter-${index}`}
            className="filters__option"
            onClick={() => activateFilter("FILTERS_ORDERING", x.name, x.value)}
          >
            {x.name}
          </div>
        ))}
      </FilterMenu>
      <FilterMenu
        title={"Release Date:"}
        activeFilter={appState.filters.dates.name}
      >
        {years.map((x, index) => (
          <FilterSubMenu subtitle={`${x.from} - ${x.to}`}>
            {x.years.map((y, index) => (
              <div
                key={`dates-filter-${index}`}
                className="filters__option"
                onClick={() =>
                  activateFilter(
                    "FILTERS_DATES",
                    y.year,
                    `${y.year}-01-01,${y.year}-12-31`
                  )
                }
              >
                {y.year}
              </div>
            ))}
          </FilterSubMenu>
        ))}
      </FilterMenu>
    </div>
  );
}
export default GameCardFilters;
