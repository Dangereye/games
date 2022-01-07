import ESRBRating from "../ESRBRating";
import MetacriticComponent from "../MetacriticComponent";

function GameDetailsRatings({ game }) {
  return (
    <div className="game-details__ratings">
      <div className="game-details__ratings__group">
        <ESRBRating esrb={game.esrb_rating} />
        <div className="game-details__ratings__group__label">ESRB</div>
      </div>
      <div className="game-details__ratings__group">
        <MetacriticComponent score={game.metacritic} />
        <div className="game-details__ratings__group__label">
          {game.metacritic ? "Metacritic" : ""}
        </div>
      </div>
    </div>
  );
}
export default GameDetailsRatings;
