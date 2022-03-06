import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { ThemeContext } from "../contexts/ThemeContext";

function useLocalStorage() {
  const { appDispatch } = useContext(AppContext);
  const { themeDispatch } = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const value = localStorage.getItem("theme");
      themeDispatch({ type: value });
    }
    if (localStorage.getItem("infinite_scroll")) {
      const value = JSON.parse(localStorage.getItem("infinite_scroll"));
      appDispatch({ type: "INFINITE_SCROLL", payload: value });
    }
  }, []);

  return {};
}
export default useLocalStorage;
