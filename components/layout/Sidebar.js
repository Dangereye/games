import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BrowseData, PlatformData } from "../../data/MenuData";
import Menu from "./menus/Menu";

function Sidebar() {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  return (
    <>
      {!appState.modal.isOpen && (
        <aside className="sidebar" style={{ color: themeState.text.primary }}>
          <div className="sidebar__menus">
            <Menu title="Browse" data={BrowseData} />
            <Menu title="Platforms" data={PlatformData} />
          </div>
        </aside>
      )}
    </>
  );
}
export default Sidebar;
