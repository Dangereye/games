import { useState, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Button from "../buttons/Button";

function GameDetailsDescription({ description }) {
  const { themeState } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={
          isOpen
            ? "game-details__description full "
            : "game-details__description"
        }
        style={{ color: themeState.text.tertiary }}
      >
        <h4 className="title" style={{ color: themeState.text.tertiary }}>
          Description
        </h4>
        <p style={{ color: themeState.text.primary }}>{description}</p>
      </div>
      <Button
        name={isOpen ? "Show Less" : "Show More"}
        styles="btn--show-more"
        func={toggleDescription}
      />
    </>
  );
}
export default GameDetailsDescription;
