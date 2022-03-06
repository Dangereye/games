import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BrowseData, PlatformData } from "../../data/MenuData";
import MenuGroup from "./menus/MenuGroup";

function Sidebar() {
  const { themeState } = useContext(ThemeContext);

  return (
    <aside className="sidebar" style={{ color: themeState.text.primary }}>
      <div className="sidebar__menu">
        <MenuGroup title="Browse" data={BrowseData} />
        <MenuGroup title="Platforms" data={PlatformData} />
      </div>
    </aside>
  );
}
export default Sidebar;
