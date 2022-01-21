import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { MdClose } from "react-icons/md";
import ModalPrevButton from "./ModalPrevButton";
import ModalNextButton from "./ModalNextButton";
import ModalVideo from "./ModalVideo";
import ModalScreenshots from "./ModalScreenshots";
function Modal() {
  const { appState, appDispatch } = useContext(AppContext);

  const closeModal = () => {
    appDispatch({ type: "CLOSE_MODAL" });
  };

  const prevItem = (index) => {
    if (index > 0) {
      appDispatch({ type: "MODAL_INDEX", payload: index - 1 });
    }
  };

  const nextItem = (index) => {
    if (index < appState.modal.data.length - 1) {
      appDispatch({ type: "MODAL_INDEX", payload: index + 1 });
    }
  };

  const changeItem = (index) => {
    appDispatch({ type: "MODAL_INDEX", payload: index });
  };

  return (
    <div className={appState.modal.isOpen ? "modal active" : "modal"}>
      <ModalPrevButton func={prevItem} />
      <ModalNextButton func={nextItem} />
      <div className="modal__close" onClick={closeModal}>
        <MdClose />
      </div>
      <ModalVideo func={nextItem} />
      <ModalScreenshots />
    </div>
  );
}
export default Modal;
