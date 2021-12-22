import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

// RGB - Colour Palette
const darkPrimary = "34,34,34";
const darkSecondary = "51, 51, 51";
const darkTertiary = "68, 68, 68";
const darkGradient = `linear-gradient(rgba(${darkPrimary}, 0.7), rgb(${darkPrimary}))`;

const lightPrimary = "238, 238, 238";
const lightSecondary = "255, 255, 255";
const lightTertiary = "204, 204, 204";
const lightGradient = `linear-gradient(rgba(${lightPrimary}, 0.7), rgb(${lightPrimary}))`;

const darkInputs = lightPrimary;
const lightInputs = darkPrimary;

const accent = "#86c232";

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
          gradient: darkGradient,
          inputs: `rgba(${darkInputs},.2)`,
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
          gradient: lightGradient,
          inputs: `rgba(${lightInputs},.2)`,
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
      primary: `rgb(${darkPrimary})`,
      secondary: `rgb(${darkSecondary})`,
      tertiary: `rgb(${darkTertiary})`,
    },
    background: {
      primary: `rgb(${lightPrimary})`,
      secondary: `rgb(${lightSecondary})`,
      tertiary: `rgb(${lightTertiary})`,
      gradient: lightGradient,
      inputs: `rgba(${lightInputs},.2)`,
    },
    accent,
  });
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeComponent;
