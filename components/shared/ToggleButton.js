import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ToggleButton({ name, option, func }) {
  const { state } = useContext(ThemeContext);
  return (
    <div className="btn__toggle-group" style={{ color: state.text.primary }}>
      <p>{name}</p>
      <div
        className={option ? "btn btn--toggle active" : "btn btn--toggle"}
        onClick={func}
      >
        <div className="switch"></div>
      </div>
    </div>
  );
}
export default ToggleButton;
