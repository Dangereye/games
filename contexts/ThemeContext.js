import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        dark_mode: true,
        text: {
          primary: "#ffffff",
          secondary: "#eee",
          tertiary: "#ccc",
        },
        background: {
          primary: "#222",
          secondary: "#333",
          tertiary: "#444",
        },
      };
    case "LIGHT":
      return {
        ...state,
        dark_mode: false,
        text: {
          primary: "#222",
          secondary: "#333",
          tertiary: "#444",
        },
        background: {
          primary: "#eee",
          secondary: "#fff",
          tertiary: "#ccc",
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
      tertiary: "#333",
    },
    background: {
      primary: "#f0f0f0",
      secondary: "#ffffff",
      tertiary: "#32383D",
    },
    accent: "#86c232",
  });
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeComponent;
