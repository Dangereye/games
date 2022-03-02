import { useState, useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import Button from "../../buttons/Button";

function Description({ description }) {
  const { themeState } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const formatDescription = (des) => {
    const newDes = des.replace(/#{3}\w+/g, (match) => {
      return match.replace(/#{3}/g, "").toUpperCase();
    });
    return newDes;
  };

  return (
    <>
      <section style={{ color: themeState.text.tertiary }}>
        <h2 className="section-title hidden">Game Description</h2>
        <h3
          className="section-subtitle"
          style={{ color: themeState.text.tertiary }}
        >
          Description
        </h3>
        <div className={isOpen ? "description full " : "description"}>
          <p className="body-text" style={{ color: themeState.text.primary }}>
            {description ? formatDescription(description) : "N/A"}
          </p>
        </div>
        {description && (
          <Button
            name={isOpen ? "Show Less" : "Show More"}
            classes="btn--more"
            func={toggleDescription}
          />
        )}
      </section>
    </>
  );
}
export default Description;
