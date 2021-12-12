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
      <Link href="/filter?parent_platforms=1">
        <a className="sidebar__title">PC</a>
      </Link>
      <Link href="/filter?parent_platforms=2">
        <a className="sidebar__title">Playstation</a>
      </Link>
      <Link href="/filter?parent_platforms=3">
        <a className="sidebar__title">Xbox</a>
      </Link>
      <Link href="/filter?parent_platforms=4">
        <a className="sidebar__title">iOS</a>
      </Link>
      <Link href="/filter?parent_platforms=5">
        <a className="sidebar__title">Mac</a>
      </Link>
      <Link href="/filter?parent_platforms=6">
        <a className="sidebar__title">Linux</a>
      </Link>
      <Link href="/filter?parent_platforms=7">
        <a className="sidebar__title">Nintendo</a>
      </Link>
      <Link href="/filter?parent_platforms=8">
        <a className="sidebar__title">Android</a>
      </Link>
      <Link href="/filter?parent_platforms=9">
        <a className="sidebar__title">Atari</a>
      </Link>
      <Link href="/filter?parent_platforms=10">
        <a className="sidebar__title">Commodore Amiga</a>
      </Link>
      <Link href="/filter?parent_platforms=11">
        <a className="sidebar__title">Sega</a>
      </Link>
      <Link href="/filter?parent_platforms=12">
        <a className="sidebar__title">3DO</a>
      </Link>
      <Link href="/filter?parent_platforms=13">
        <a className="sidebar__title">Neo Geo</a>
      </Link>
      <Link href="/filter?parent_platforms=14">
        <a className="sidebar__title">Web</a>
      </Link>
    </aside>
  );
}
export default Sidebar;
