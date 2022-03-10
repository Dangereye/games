import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function Option({ name, func }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="filters__option"
      onClick={func}
      style={{ color: themeState.text.secondary }}
    >
      {name}
    </div>
  );
}
export default Option;
