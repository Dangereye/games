import { useContext } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AppContext } from "../../../contexts/AppContext";

function GameDetailsTrailer({ trailers }) {
  const { appDispatch } = useContext(AppContext);

  const addTrailers = (e) => {
    appDispatch({
      type: "OPEN_MODAL",
      payload: { type: "trailers", data: trailers, index: 0 },
    });
  };
  return (
    <div className="game-details__trailer" onClick={addTrailers}>
      <div className="game-details__trailer__icon">
        <BsPlayFill />
      </div>
      <span>Watch Trailer</span>
    </div>
  );
}
export default GameDetailsTrailer;
