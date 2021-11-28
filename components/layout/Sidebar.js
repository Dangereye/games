import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

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
      <h3>Home</h3>
      <button onClick={toggleDM}>Toggle Dark Mode</button>
    </aside>
  );
}
export default Sidebar;
