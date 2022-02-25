import { createContext, useReducer } from "react";

export const FiltersContext = createContext();

const FiltersReducer = (state, action) => {
  switch (action.type) {
    case "CLOSE_ALL":
      return {
        ...state,
        ordering: { ...state.ordering, menu: false },
        years: { ...state.years, menu: false },
        genres: { ...state.genres, menu: false },
      };

    case "OPEN_ORDERING":
      return { ...state, ordering: { ...state.ordering, menu: true } };

    case "OPEN_YEARS":
      return { ...state, years: { ...state.years, menu: true } };

    case "OPEN_GENRES":
      return { ...state, genres: { ...state.genres, menu: true } };

    case "SET_ORDERING":
      return {
        ...state,
        ordering: {
          menu: false,
          name: action.payload.name,
          value: action.payload.value,
        },
      };
    case "SET_YEARS":
      return {
        ...state,
        years: {
          menu: false,
          name: action.payload.name,
          value: action.payload.value,
        },
      };
    case "RESET_YEARS":
      return {
        ...state,
        years: {
          menu: false,
          name: "All",
          value: "",
        },
      };
    case "SET_GENRES":
      return {
        ...state,
        genres: {
          menu: false,
          name: action.payload.name,
          value: action.payload.value,
        },
      };
    case "RESET_GENRES":
      return {
        ...state,
        genres: {
          menu: false,
          name: "All",
          value: "",
        },
      };
    default:
      return;
  }
};

function FiltersComponent({ children }) {
  const [filtersState, filtersDispatch] = useReducer(FiltersReducer, {
    ordering: { menu: false, name: "Relevance", value: "relevance" },
    years: { menu: false, name: "All", value: "" },
    genres: { menu: false, name: "All", value: "" },
  });

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersComponent;
