import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

// RGB - Colour Palette
const darkPrimary = "34,34,34";
const darkSecondary = "64, 64, 64";
const darkTertiary = "94, 94, 94";
const darkGradient = `linear-gradient(rgba(${darkPrimary}, 0.6), rgb(${darkPrimary}))`;

const lightPrimary = "223, 223, 223";
const lightSecondary = "253, 253, 253";
const lightTertiary = "193, 193, 193";
const lightGradient = `linear-gradient(rgba(${lightPrimary}, 0.6), rgb(${lightPrimary}))`;

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        dark_mode: true,
        text: {
          primary: `rgb(${lightSecondary})`,
          secondary: `rgb(${lightPrimary})`,
          tertiary: `rgb(${lightTertiary})`,
        },
        background: {
          primary: `rgb(${darkPrimary})`,
          secondary: `rgb(${darkSecondary})`,
          tertiary: `rgb(${darkTertiary})`,
          navbar: `rgba(${darkPrimary},.8)`,
          gradient: darkGradient,
          inputs: `rgba(${lightPrimary},.2)`,
        },
      };
    case "LIGHT":
      return {
        ...state,
        dark_mode: false,
        text: {
          primary: `rgb(${darkPrimary})`,
          secondary: `rgb(${darkSecondary})`,
          tertiary: `rgb(${darkTertiary})`,
        },
        background: {
          primary: `rgb(${lightPrimary})`,
          secondary: `rgb(${lightSecondary})`,
          tertiary: `rgb(${lightTertiary})`,
          navbar: `rgba(${lightPrimary},.8)`,
          gradient: lightGradient,
          inputs: `rgba(${darkPrimary},.2)`,
        },
      };
    default:
      return;
  }
};

function ThemeComponent({ children }) {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, {
    dark_mode: true,
    text: {
      primary: `rgb(${lightSecondary})`,
      secondary: `rgb(${lightPrimary})`,
      tertiary: `rgb(${lightTertiary})`,
    },
    background: {
      primary: `rgb(${darkPrimary})`,
      secondary: `rgb(${darkSecondary})`,
      tertiary: `rgb(${darkTertiary})`,
      navbar: `rgba(${darkPrimary},.8)`,
      gradient: darkGradient,
      inputs: `rgba(${lightPrimary},.2)`,
    },
  });
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeComponent;
