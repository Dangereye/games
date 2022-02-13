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
      <section
        className={isOpen ? "description full " : "description"}
        style={{ color: themeState.text.tertiary }}
      >
        <h4 className="title" style={{ color: themeState.text.tertiary }}>
          Description
        </h4>
        <p style={{ color: themeState.text.primary }}>
          {description ? formatDescription(description) : "Unknown"}
        </p>
      </section>
      <Button
        name={isOpen ? "Show Less" : "Show More"}
        styles="btn--show-more"
        func={toggleDescription}
      />
    </>
  );
}
export default Description;
