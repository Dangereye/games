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

    case "OPEN_MENU":
      return {
        ...state,
        [action.payload]: { ...state[action.payload], menu: true },
      };

    case "SET_FILTER":
      return {
        ...state,
        [action.payload.filter]: {
          menu: false,
          name: action.payload.name,
          value: action.payload.value,
        },
      };

    case "RESET_FILTER":
      return {
        ...state,
        [action.payload]: {
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
