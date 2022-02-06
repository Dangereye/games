import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Video({ func }) {
  const { appState } = useContext(AppContext);
  return (
    <>
      {appState.modal.type === "trailers" && (
        <>
          <div className="modal__title">
            <div>{appState.modal.data[appState.modal.index].name}</div>
            <div>{`Showing ${appState.modal.index + 1} of ${
              appState.modal.data.length
            }`}</div>
          </div>
          <div className="modal__viewbox">
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              key={appState.modal.data[appState.modal.index].id}
              onEnded={() => func(appState.modal.index)}
            >
              <source
                src={appState.modal.data[appState.modal.index].data.max}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
    </>
  );
}
export default Video;
