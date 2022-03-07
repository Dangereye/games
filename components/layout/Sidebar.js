import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BrowseData, PlatformData } from "../../data/MenuData";
import Menu from "./menus/Menu";

function Sidebar() {
  const { themeState } = useContext(ThemeContext);

  return (
    <aside className="sidebar" style={{ color: themeState.text.primary }}>
      <div className="sidebar__menus">
        <Menu title="Browse" data={BrowseData} />
        <Menu title="Platforms" data={PlatformData} />
      </div>
    </aside>
  );
}
export default Sidebar;
