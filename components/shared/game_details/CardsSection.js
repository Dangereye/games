import { useState, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Button from "../buttons/Button";
import GameCard from "../game_cards/GameCard";

function CardsSection({ condition, title, subtitle, list }) {
  const { themeState } = useContext(ThemeContext);
  const [limit, setLimit] = useState(true);

  const toggleAmount = () => {
    setLimit(!limit);
  };

  return (
    <>
      {condition && (
        <section className="cards">
          <h2 className="section-title hidden">{title}</h2>
          <h3
            className="section-subtitle"
            style={{ color: themeState.text.tertiary }}
          >
            {subtitle}
          </h3>
          <div className="grid grid--cards">
            {(limit ? list.filter((item, index) => index < 5) : list).map(
              (game, index) => (
                <GameCard key={`parent-${index}`} game={game} />
              )
            )}
          </div>
          {list.length > 5 && (
            <Button
              name={limit ? "Show More" : "Show Less"}
              classes="btn--show-more"
              func={toggleAmount}
            />
          )}
        </section>
      )}
    </>
  );
}
export default CardsSection;
