import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function ToggleButton({ name, option, func }) {
  const { themeState } = useContext(ThemeContext);

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      func();
    }
  };

  return (
    <div
      className="btn__toggle-group"
      style={{ color: themeState.text.primary }}
    >
      <span>{name}</span>
      <div
        tabIndex="0"
        className={option ? "btn btn--toggle active" : "btn btn--toggle"}
        onClick={func}
        onKeyPress={handleKeyPress}
      >
        <div className="switch"></div>
      </div>
    </div>
  );
}
export default ToggleButton;
