import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function MiscCards({ title, children }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section className="misc-cards" style={{ color: themeState.text.primary }}>
      <h1 className="display">{title}</h1>
      <div className="misc-cards__list grid">{children}</div>
    </section>
  );
}
export default MiscCards;
