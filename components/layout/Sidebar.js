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
      <Link href="/">
        <a className="sidebar__title">Home</a>
      </Link>
      <ToggleButton
        name="Dark Mode"
        option={themeState.dark_mode}
        func={toggleDM}
      />
    </aside>
  );
}
export default Sidebar;
