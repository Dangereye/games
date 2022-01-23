import { createContext, useReducer } from "react";

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MOBILE_MENU":
      return {
        ...state,
        mobileMenu_isOpen: true,
      };
    case "CLOSE_MOBILE_MENU":
      return {
        ...state,
        mobileMenu_isOpen: false,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          isOpen: true,
          type: action.payload.type,
          data: action.payload.data,
          index: action.payload.index,
        },
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: { ...state.modal, isOpen: false, type: "", data: [], index: 0 },
      };
    case "MODAL_INDEX":
      return {
        ...state,
        modal: { ...state.modal, index: action.payload },
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_MORE":
      return {
        ...state,
        isLoadingMore: true,
      };
    case "ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: { isError: false, status: "", message: "" },
        data: action.payload,
      };
    case "LOAD_MORE_GAMES":
      return {
        ...state,
        isLoadingMore: false,
        error: { isError: false, status: "", message: "" },
        data: {
          ...state.data,
          results: action.payload.results,
          next: action.payload.next,
        },
      };
    case "FILTERS_ORDERING":
      return {
        ...state,
        filters: {
          ...state.filters,
          ordering: {
            query: "ordering",
            name: action.payload.name,
            value: action.payload.value,
          },
        },
      };
    case "FILTERS_DATES":
      return {
        ...state,
        filters: {
          ...state.filters,
          dates: {
            query: "dates",
            name: action.payload.name,
            value: action.payload.value,
          },
        },
      };
    default:
      return;
  }
};

function AppComponent({ children }) {
  const [appState, appDispatch] = useReducer(AppReducer, {
    mobileMenu_isOpen: false,
    modal: { isOpen: false, type: "", data: [], index: 0 },
    isLoading: true,
    isLoadingMore: false,
    error: { isError: false, status: "", message: "" },
    data: [],
    filters: {
      ordering: {
        name: "Relevance",
        value: "relevance",
      },
      dates: {
        name: "All",
        value: "",
      },
    },
  });

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppComponent;
