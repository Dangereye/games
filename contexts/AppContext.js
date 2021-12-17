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
    default:
      return;
  }
};

function AppComponent({ children }) {
  const [appState, appDispatch] = useReducer(AppReducer, {
    mobileMenu_isOpen: false,
    isLoading: true,
    isLoadingMore: false,
    error: { isError: false, status: "", message: "" },
    data: [],
  });

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppComponent;
