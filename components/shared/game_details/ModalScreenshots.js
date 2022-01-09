import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import Image from "next/image";
function ModalScreenshots() {
  const { appState } = useContext(AppContext);
  return (
    <>
      {appState.modal.type === "screenshots" && (
        <>
          <div className="modal__title">
            <div>{appState.data.name}</div>
            <div>{`Showing ${appState.modal.index + 1} of ${
              appState.modal.data.length
            }`}</div>
          </div>
          <div className="modal__viewbox">
            <Image
              src={appState.modal.data[appState.modal.index].image}
              width={appState.modal.data[appState.modal.index].width}
              height={appState.modal.data[appState.modal.index].height}
              alt="Screenshot"
            />
          </div>
        </>
      )}
    </>
  );
}
export default ModalScreenshots;
