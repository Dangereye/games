import { useEffect, useContext } from "react";
import { FiltersContext } from "../../../contexts/FiltersContext";
import filterData from "../../../data/FilterData";
import FilterMenu from "./FilterMenu";
import FilterSubMenu from "./FilterSubMenu";

function GameCardFilters({ filters }) {
  const { filtersState, filtersDispatch } = useContext(FiltersContext);
  const { years, genres } = filters;

  const activateFilter = (filter, name, value) => {
    filtersDispatch({ type: "SET_FILTER", payload: { filter, name, value } });
  };

  useEffect(() => {
    if (!years) {
      filtersDispatch({ type: "RESET_FILTER", payload: "years" });
    }
    if (!genres) {
      filtersDispatch({ type: "RESET_FILTER", payload: "genres" });
    }
  }, [filters]);

  return (
    <div className="filters">
      {/* Orders filter */}
      <FilterMenu
        name="ordering"
        state={filtersState.ordering.menu}
        title={"Ordered By:"}
        subtitle="select"
        activeFilter={filtersState.ordering.name}
      >
        {filterData.ordering_values.map((x, index) => (
          <div
            key={`ordering-filter-${index}`}
            className="filters__option"
            onClick={() => activateFilter("ordering", x.name, x.value)}
          >
            {x.name}
          </div>
        ))}
      </FilterMenu>

      {/* Years filter */}
      {years && (
        <FilterMenu
          name="years"
          state={filtersState.years.menu}
          title={"Release Date:"}
          subtitle="Select"
          activeFilter={filtersState.years.name}
        >
          <div
            className="filters__option"
            onClick={() => activateFilter("years", "All", "")}
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
                      "years",
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
      )}

      {/* Genre filter */}
      {genres && (
        <FilterMenu
          name="genres"
          state={filtersState.genres.menu}
          title={"Genre:"}
          subtitle="select"
          activeFilter={filtersState.genres.name}
        >
          <>
            <div
              className="filters__option"
              onClick={() => activateFilter("genres", "All", "")}
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
                    activateFilter("genres", item.name, item.value)
                  }
                >
                  {item.name}
                </div>
              );
            })}
          </>
        </FilterMenu>
      )}
    </div>
  );
}

GameCardFilters.defaultProps = {
  filters: [],
};

export default GameCardFilters;
