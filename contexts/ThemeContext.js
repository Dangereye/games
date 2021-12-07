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
    default:
      return;
  }
};

function ThemeComponent({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, {
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
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeComponent;
