import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        dark_mode: true,
        text: {
          primary: "#fff",
          secondary: "#eee",
          tertiary: "#ccc",
          accent: "crimson",
        },
        background: {
          primary: "#111",
          secondary: "#222",
          tertiary: "#444",
          accent: "crimson",
        },
      };
    case "LIGHT":
      return {
        ...state,
        dark_mode: false,
        text: {
          primary: "#111",
          secondary: "#222",
          tertiary: "#444",
          accent: "crimson",
        },
        background: {
          primary: "#fff",
          secondary: "#eee",
          tertiary: "#ccc",
          accent: "crimson",
        },
      };
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

function ThemeComponent({ children }) {
  const [state, dispatch] = useReducer(ThemeReducer, {
    mobileMenu_isOpen: false,
    dark_mode: false,
    text: {
      primary: "#111",
      secondary: "#222",
      tertiary: "#444",
      accent: "crimson",
    },
    background: {
      primary: "#fff",
      secondary: "#eee",
      tertiary: "#ccc",
      accent: "crimson",
    },
  });
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeComponent;
