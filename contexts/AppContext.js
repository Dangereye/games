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
    default:
      return;
  }
};

function AppComponent({ children }) {
  const [appState, appDispatch] = useReducer(AppReducer, {
    mobileMenu_isOpen: false,
  });

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppComponent;
