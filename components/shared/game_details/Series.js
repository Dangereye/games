import GameCard from "../game_cards/GameCard";

function Series({ series }) {
  return (
    <>
      {series.count > 0 && (
        <section className="series">
          <h4 className="title">Games Series.</h4>
          <div className="cards grid grid--multiple">
            {series.results.map((game, index) => (
              <GameCard key={`series-${index}`} game={game} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default Series;
