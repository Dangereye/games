import { useContext } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AppContext } from "../../../../contexts/AppContext";

function Trailer({ trailers }) {
  const { appDispatch } = useContext(AppContext);

  const addTrailers = (e) => {
    appDispatch({
      type: "OPEN_MODAL",
      payload: { type: "trailers", data: trailers, index: 0 },
    });
  };
  return (
    <>
      {trailers && (
        <section className="mt-4">
          <h2 className="section-title hidden">Game Trailers</h2>
          <div className="trailer" onClick={addTrailers}>
            <div className="trailer__icon">
              <BsPlayFill />
            </div>
            <span>Watch Trailer</span>
          </div>
        </section>
      )}
    </>
  );
}
export default Trailer;
