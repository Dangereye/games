import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import ToggleButton from "../shared/ToggleButton";

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
      <Link href="/platforms">
        <a className="sidebar__title">Platforms</a>
      </Link>
      <Link href="/platforms/4">
        <a className="sidebar__title">PC</a>
      </Link>
      <Link href="/platforms/187">
        <a className="sidebar__title">Playstation 5</a>
      </Link>
      <Link href="/platforms/18">
        <a className="sidebar__title">Playstation 4</a>
      </Link>
      <Link href="/platforms/16">
        <a className="sidebar__title">Playstation 3</a>
      </Link>
      <Link href="/platforms/15">
        <a className="sidebar__title">Playstation 2</a>
      </Link>
    </aside>
  );
}
export default Sidebar;
