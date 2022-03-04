import { createContext, useReducer } from "react";

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "MOBILE_MENU":
      return {
        ...state,
        mobileMenu_isOpen: action.payload,
      };
    case "INFINITE_SCROLL":
      return {
        ...state,
        infinite_scroll: action.payload,
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
        modal: { isOpen: false, type: "", data: [], index: 0 },
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
        data: { results: [] },
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
    infinite_scroll: true,
    modal: { isOpen: false, type: "", data: [], index: 0 },
    isLoading: true,
    isLoadingMore: false,
    error: { isError: false, status: "", message: "" },
    data: { results: [] },
  });

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppComponent;
