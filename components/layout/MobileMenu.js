import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Link from "next/link";
import ToggleButton from "../shared/buttons/ToggleButton";

function MobileMenu() {
  const { appState, appDispatch } = useContext(AppContext);
  const { themeState, themeDispatch } = useContext(ThemeContext);

  const toggleDM = () => {
    if (themeState.dark_mode) {
      themeDispatch({ type: "LIGHT" });
    } else {
      themeDispatch({ type: "DARK" });
    }
  };
  return (
    <div
      className={
        appState.mobileMenu_isOpen ? "mobile-menu active" : "mobile-menu"
      }
      style={{
        color: themeState.text.primary,
        backgroundColor: themeState.background.primary,
      }}
    >
      <Link href="/">
        <a className="sidebar__title">Home</a>
      </Link>
      <ToggleButton
        name="Dark Mode"
        option={themeState.dark_mode}
        func={toggleDM}
      />
    </div>
  );
}
export default MobileMenu;
