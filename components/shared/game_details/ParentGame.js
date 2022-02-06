import GameCard from "../game_cards/GameCard";

function ParentGame({ parent }) {
  return (
    <>
      {parent.count > 0 && (
        <section className="editions">
          <h4 className="title">Edition of. </h4>
          <div className="cards grid grid--multiple">
            {parent.results.map((game, index) => (
              <GameCard key={`parent-${index}`} game={game} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default ParentGame;
