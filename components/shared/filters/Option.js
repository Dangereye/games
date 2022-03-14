import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function Option({ name, func }) {
  const { themeState } = useContext(ThemeContext);

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      func();
    }
  };

  return (
    <div
      tabIndex="0"
      className="filters__option"
      onClick={func}
      onKeyPress={handleKeyPress}
      style={{ color: themeState.text.secondary }}
    >
      {name}
    </div>
  );
}
export default Option;
