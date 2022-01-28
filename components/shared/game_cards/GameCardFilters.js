import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import filterData from "../../../data/FilterData";
import FilterMenu from "./FilterMenu";
import FilterSubMenu from "./FilterSubMenu";

function GameCardFilters({ filters }) {
  const { appState, appDispatch } = useContext(AppContext);
  const years = filters.years ? filters.years : [];
  const genres = filters.genres ? filters.genres : [];

  const activateFilter = (dispatch, name, value) => {
    appDispatch({ type: dispatch, payload: { name, value } });
  };

  return (
    <div className="filters">
      {/* Orders filter */}
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

      {/* Years filter */}
      <FilterMenu
        title={"Release Date:"}
        subtitle="Select"
        activeFilter={appState.filters.dates.name}
      >
        <div
          className="filters__option"
          onClick={() => activateFilter("FILTERS_DATES", "All", "")}
        >
          All
        </div>
        {years.map((x, index) => (
          <FilterSubMenu
            key={`dates-filter ${index}`}
            subtitle={`${x.from} - ${x.to}`}
          >
            {x.years.map((y, index) => (
              <div
                key={`sub-dates-filter-${index}`}
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

      {/* Genre filter */}
      <FilterMenu
        title={"Genre:"}
        subtitle="select"
        activeFilter={appState.filters.genres.name}
      >
        <>
          <div
            className="filters__option"
            onClick={() => activateFilter("FILTERS_GENRES", "All", "")}
          >
            All
          </div>
          {genres.map((x, index) => {
            const item = filterData.genres_values.find(
              (item) => item.id === x.id
            );
            return (
              <div
                key={`ordering-filter-${index}`}
                className="filters__option"
                onClick={() =>
                  activateFilter("FILTERS_GENRES", item.name, item.value)
                }
              >
                {item.name}
              </div>
            );
          })}
        </>
      </FilterMenu>
    </div>
  );
}
export default GameCardFilters;
