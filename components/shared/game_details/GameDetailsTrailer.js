import { useContext } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AppContext } from "../../../contexts/AppContext";

function GameDetailsTrailer() {
  const { appState, appDispatch } = useContext(AppContext);

  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className="game-details__trailer" onClick={handleClick}>
      <div className="game-details__trailer__icon">
        <BsPlayFill />
      </div>
      <span>Watch Trailer</span>
    </div>
  );
}
export default GameDetailsTrailer;
