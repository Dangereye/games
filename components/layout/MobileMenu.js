import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Link from "next/link";
import ToggleButton from "../shared/ToggleButton";

function MobileMenu() {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleDM = () => {
    if (state.dark_mode) {
      dispatch({ type: "LIGHT" });
    } else {
      dispatch({ type: "DARK" });
    }
  };
  return (
    <div
      className={state.mobileMenu_isOpen ? "mobile-menu active" : "mobile-menu"}
      style={{
        color: state.text.primary,
        backgroundColor: state.background.primary,
      }}
    >
      <Link href="/">
        <a className="sidebar__title">Home</a>
      </Link>
      <ToggleButton name="Dark Mode" option={state.dark_mode} func={toggleDM} />
    </div>
  );
}
export default MobileMenu;
