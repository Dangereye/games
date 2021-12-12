import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import ToggleButton from "../shared/ToggleButton";
import { PlaystationListData } from "../../data/PlatformListData";
import DropdownList from "../DropdownList";

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
      <Link href="/">
        <a className="sidebar__title">Home</a>
      </Link>
      <div className="dropdown-list__title">Platforms</div>
      <Link href="/platforms/4">
        <a className="sidebar__title">PC</a>
      </Link>
      <DropdownList list={PlaystationListData} />
    </aside>
  );
}
export default Sidebar;
