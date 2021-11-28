import { createContext } from "react";

export const ThemeContext = createContext();

function ThemeComponent({ children }) {
  const Themes = {
    light: { color: "#111", background: { a: "#f7f7f7", b: "#ffffff" } },
    dark: {
      color: "#ffffff",
      background: { a: "#111", b: "#222" },
    },
  };
  return (
    <ThemeContext.Provider value={Themes}>{children}</ThemeContext.Provider>
  );
}
export default ThemeComponent;
