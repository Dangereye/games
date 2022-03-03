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
        <section className="trailer mt-4" onClick={addTrailers}>
          <div className="trailer__icon">
            <BsPlayFill />
          </div>
          <span>Watch Trailer</span>
        </section>
      )}
    </>
  );
}
export default Trailer;
