import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import ToggleButton from "../shared/ToggleButton";

function Sidebar() {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleDM = () => {
    if (state.dark_mode) {
      dispatch({ type: "LIGHT" });
    } else {
      dispatch({ type: "DARK" });
    }
  };

  return (
    <aside className="sidebar" style={{ color: state.text.primary }}>
      <Link href="/">
        <a className="sidebar__title">Home</a>
      </Link>
      <ToggleButton name="Dark Mode" option={state.dark_mode} func={toggleDM} />
    </aside>
  );
}
export default Sidebar;
