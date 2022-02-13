import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

function CardsSection({ condition, title, children }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <>
      {condition && (
        <section className={"cards"}>
          <h4 className="title" style={{ color: themeState.text.tertiary }}>
            {title}
          </h4>
          <div className="cards grid grid--multiple">{children}</div>
        </section>
      )}
    </>
  );
}
export default CardsSection;
