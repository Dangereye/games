import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import Button from "../shared/Button";

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
    <aside className="sidebar">
      <Link href="/">
        <a className="sidebar__title" style={{ color: state.text.primary }}>
          Home
        </a>
      </Link>
      <Button name="Toggle Dark Mode" func={toggleDM} />
    </aside>
  );
}
export default Sidebar;
