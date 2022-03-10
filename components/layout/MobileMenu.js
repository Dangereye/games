import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BrowseData, PlatformData, ApplicationData } from "../../data/MenuData";
import Menu from "./menus/Menu";

function MobileMenu() {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

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
      <Menu title="Browse" data={BrowseData} />
      <Menu title="Platforms" data={PlatformData} />
      <Menu title="Application" data={ApplicationData} />
    </div>
  );
}
export default MobileMenu;
