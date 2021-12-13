import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import ToggleButton from "../shared/ToggleButton";
import {
  AtariListData,
  MacListData,
  NintendoListData,
  PlayStationListData,
  SegaListData,
  XboxListData,
} from "../../data/PlatformListData";
import DropdownList from "../shared/DropdownList";

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
      <Link href="/" passHref>
        <div className="sidebar__title">Home</div>
      </Link>
      <div className="dropdown-list__title">Platforms</div>
      <Link href="/platforms/4" passHref>
        <div className="sidebar__title">PC</div>
      </Link>
      <DropdownList list={PlayStationListData} />
      <DropdownList list={XboxListData} />
      <DropdownList list={NintendoListData} />
      <DropdownList list={SegaListData} />
      <DropdownList list={AtariListData} />
      <DropdownList list={MacListData} />
    </aside>
  );
}
export default Sidebar;
