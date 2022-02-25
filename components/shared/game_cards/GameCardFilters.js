import { useEffect, useContext } from "react";
import { FiltersContext } from "../../../contexts/FiltersContext";
import filterData from "../../../data/FilterData";
import FilterMenu from "./FilterMenu";
import FilterSubMenu from "./FilterSubMenu";

function GameCardFilters({ filters }) {
  const { filtersState, filtersDispatch } = useContext(FiltersContext);
  const { years, genres } = filters;

  const activateFilter = (dispatch, name, value) => {
    filtersDispatch({ type: dispatch, payload: { name, value } });
  };

  useEffect(() => {
    if (!years) {
      filtersDispatch({ type: "RESET_YEARS" });
    }
    if (!genres) {
      filtersDispatch({ type: "RESET_GENRES" });
    }
  }, [filters]);

  return (
    <div className="filters">
      {/* Orders filter */}
      <FilterMenu
        state={filtersState.ordering.menu}
        title={"Ordered by:"}
        subtitle="select"
        activeFilter={filtersState.ordering.name}
        func={() => filtersDispatch({ type: "OPEN_ORDERING" })}
      >
        {filterData.ordering_values.map((x, index) => (
          <div
            key={`ordering-filter-${index}`}
            className="filters__option"
            onClick={() => activateFilter("SET_ORDERING", x.name, x.value)}
          >
            {x.name}
          </div>
        ))}
      </FilterMenu>

      {/* Years filter */}
      {years && (
        <FilterMenu
          state={filtersState.years.menu}
          title={"Release Date:"}
          subtitle="Select"
          activeFilter={filtersState.years.name}
          func={() => filtersDispatch({ type: "OPEN_YEARS" })}
        >
          <div
            className="filters__option"
            onClick={() => activateFilter("SET_YEARS", "All", "")}
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
                      "SET_YEARS",
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
          state={filtersState.genres.menu}
          title={"Genre:"}
          subtitle="select"
          activeFilter={filtersState.genres.name}
          func={() => filtersDispatch({ type: "OPEN_GENRES" })}
        >
          <>
            <div
              className="filters__option"
              onClick={() => activateFilter("SET_GENRES", "All", "")}
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
                    activateFilter("SET_GENRES", item.name, item.value)
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
