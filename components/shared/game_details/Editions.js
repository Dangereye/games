import GameCard from "../game_cards/GameCard";
function Editions({ editions }) {
  return (
    <>
      {editions.count > 0 && (
        <section className="editions">
          <h4 className="title">DLC's, GOTY and other editions. </h4>
          <div className="cards grid grid--multiple">
            {editions.results.map((game, index) => (
              <GameCard key={`edition-${index}`} game={game} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default Editions;
