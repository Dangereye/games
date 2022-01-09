import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import Image from "next/image";
function GameDetailsScreenshots({ screenshots }) {
  const { appState, appDispatch } = useContext(AppContext);
  const addScreenshots = (index) => {
    appDispatch({
      type: "OPEN_MODAL",
      payload: { type: "screenshots", data: screenshots, index },
    });
  };
  return (
    <div className="game-details__screenshots grid grid--multiple mt">
      {screenshots.map((pic, index) => (
        <div className="game-details__screenshots__screenshot" key={pic.id}>
          <Image
            src={pic.image}
            width={pic.width}
            height={pic.height}
            layout="responsive"
            alt="Screenshot"
            blurDataURL={pic.image}
            placeholder="blur"
            onClick={() => addScreenshots(index)}
          />
        </div>
      ))}
    </div>
  );
}
export default GameDetailsScreenshots;
