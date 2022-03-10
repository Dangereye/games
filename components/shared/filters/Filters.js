import { useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FiltersContext } from "../../../contexts/FiltersContext";
import filterData from "../../../data/FilterData";
import FilterMenu from "./FilterMenu";
import FilterSubMenu from "./FilterSubMenu";
import Option from "./Option";
import Reset from "./Reset";

function GameCardFilters() {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const { filtersState, filtersDispatch } = useContext(FiltersContext);
  const { years, genres } = appState.data.filters;

  const activateFilter = (state, name, value) => {
    filtersDispatch({ type: "SET_FILTER", payload: { state, name, value } });
  };

  useEffect(() => {
    if (!years) {
      filtersDispatch({ type: "RESET_FILTER", payload: "years" });
    }
    if (!genres) {
      filtersDispatch({ type: "RESET_FILTER", payload: "genres" });
    }
  }, []);

  return (
    <section className="mt-4" style={{ color: themeState.text.primary }}>
      <h2 className="section-title hidden">Filter menus</h2>
      <div className="filters">
        {/* Ordering filter */}
        <FilterMenu
          state="ordering"
          active={filtersState.ordering.menu}
          name={"Ordered By:"}
          value={filtersState.ordering.name}
        >
          {filterData.ordering_values.map((ordering, i) => (
            <Option
              key={`ordering-filter-${i}`}
              name={ordering.name}
              func={() =>
                activateFilter("ordering", ordering.name, ordering.value)
              }
            />
          ))}
        </FilterMenu>

        {/* Years filter */}
        {years && (
          <FilterMenu
            state="years"
            active={filtersState.years.menu}
            name={"Release Date:"}
            value={filtersState.years.name}
          >
            <Reset
              condition={filtersState.years.value !== ""}
              func={() => activateFilter("years", "All", "")}
            />
            {years.map((year, i) => (
              <FilterSubMenu
                key={`dates-filter-${i}`}
                subtitle={`${year.from} - ${year.to}`}
              >
                {year.years.map((year, i) => (
                  <Option
                    key={`dates-subfilter-${i}`}
                    name={year.year}
                    func={() =>
                      activateFilter(
                        "years",
                        year.year,
                        `${year.year}-01-01,${year.year}-12-31`
                      )
                    }
                  />
                ))}
              </FilterSubMenu>
            ))}
          </FilterMenu>
        )}

        {/* Genres filter */}
        {genres && (
          <FilterMenu
            state="genres"
            active={filtersState.genres.menu}
            name={"Genre:"}
            value={filtersState.genres.name}
          >
            <>
              <Reset
                condition={filtersState.genres.value !== ""}
                func={() => activateFilter("genres", "All", "")}
              />
              {genres.map((genre, i) => {
                const item = filterData.genres_values.find(
                  (item) => item.id === genre.id
                );
                return (
                  <Option
                    key={`genres-filter-${i}`}
                    name={item.name}
                    func={() => activateFilter("genres", item.name, item.value)}
                  />
                );
              })}
            </>
          </FilterMenu>
        )}
      </div>
    </section>
  );
}

export default GameCardFilters;
