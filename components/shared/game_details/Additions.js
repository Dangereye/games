import GameCard from "../game_cards/GameCard";
function Additions({ additions }) {
  return (
    <>
      {additions.count > 0 && (
        <section className="editions">
          <h4 className="title">DLC&apos;s, GOTY and other additions. </h4>
          <div className="cards grid grid--multiple">
            {additions.results.map((game, index) => (
              <GameCard key={`edition-${index}`} game={game} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default Additions;
