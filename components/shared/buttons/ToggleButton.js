import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function ToggleButton({ name, option, func }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="btn__toggle-group"
      style={{ color: themeState.text.primary }}
    >
      <span>{name}</span>
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
