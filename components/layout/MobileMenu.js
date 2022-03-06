import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BrowseData, PlatformData } from "../../data/MenuData";
import ToggleButton from "../shared/buttons/ToggleButton";
import MenuGroup from "./menus/MenuGroup";

function MobileMenu() {
  const { appState } = useContext(AppContext);
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
      <ToggleButton
        name="Dark Mode"
        option={themeState.dark_mode}
        func={toggleDM}
      />
      <MenuGroup title="Browse" data={BrowseData} />
      <MenuGroup title="Platforms" data={PlatformData} />
    </div>
  );
}
export default MobileMenu;
