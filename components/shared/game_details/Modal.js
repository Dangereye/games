import { useState, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { GrPrevious, GrNext, GrClose } from "react-icons/gr";

function Modal() {
  const { appState, appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const [active, setActive] = useState(0);
  console.log("Modal: ", appState.modal);

  const closeModal = () => {
    appDispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div
      className={appState.modal.isOpen ? "modal active" : "modal"}
      style={{ backgroundColor: themeState.background.primary }}
    >
      <div className="modal__navigation">
        <div
          className="modal__navigation__prev"
          style={{
            backgroundColor: themeState.background.secondary,
          }}
        >
          <GrPrevious />
        </div>
        <div
          className="modal__navigation__next"
          style={{
            backgroundColor: themeState.background.secondary,
          }}
        >
          <GrNext />
        </div>
        <div
          className="modal__navigation__close"
          style={{
            backgroundColor: themeState.background.secondary,
          }}
          onClick={closeModal}
        >
          <GrClose />
        </div>
      </div>
      {appState.modal.isOpen && (
        <div className="modal__viewbox">
          <video width="100%" height="auto" controls autoPlay>
            <source
              src={appState.modal.data[active].data.max}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
export default Modal;
