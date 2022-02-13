import { useState, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Button from "../buttons/Button";
import GameCard from "../game_cards/GameCard";

function CardsSection({ condition, title, list }) {
  const { themeState } = useContext(ThemeContext);
  const [limit, setLimit] = useState(true);

  const toggleAmount = () => {
    setLimit(!limit);
  };

  return (
    <>
      {condition && (
        <section className={"cards"}>
          <h4 className="title" style={{ color: themeState.text.tertiary }}>
            {title}
          </h4>
          <div className="cards grid grid--multiple">
            {(limit ? list.filter((item, index) => index < 7) : list).map(
              (game, index) => (
                <GameCard key={`parent-${index}`} game={game} />
              )
            )}
          </div>
          {list.length > 7 && (
            <Button
              name={limit ? "Show More" : "Show Less"}
              styles="btn--show-more"
              func={toggleAmount}
            />
          )}
        </section>
      )}
    </>
  );
}
export default CardsSection;
