import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BrowseData, PlatformData } from "../../data/MenuData";
import ToggleButton from "../shared/buttons/ToggleButton";
import MenuGroup from "../shared/MenuGroup";

function Sidebar() {
  const { themeState, themeDispatch } = useContext(ThemeContext);

  const toggleDM = () => {
    if (themeState.dark_mode) {
      themeDispatch({ type: "LIGHT" });
    } else {
      themeDispatch({ type: "DARK" });
    }
  };

  return (
    <aside className="sidebar" style={{ color: themeState.text.primary }}>
      <ToggleButton
        name="Dark Mode"
        option={themeState.dark_mode}
        func={toggleDM}
      />
      <MenuGroup title="Browse" data={BrowseData} />
      <MenuGroup title="Platforms" data={PlatformData} />
    </aside>
  );
}
export default Sidebar;
