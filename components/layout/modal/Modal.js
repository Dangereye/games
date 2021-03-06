import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { MdClose } from "react-icons/md";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import Video from "./Video";
import Screenshots from "./Screenshots";
import Button from "../../shared/buttons/Button";
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

  return (
    <div className={appState.modal.isOpen ? "modal active" : "modal"}>
      <Button name={<MdClose />} classes="modal__close" func={closeModal} />
      <PrevButton func={prevItem} />
      <NextButton func={nextItem} />
      <Video func={nextItem} />
      <Screenshots />
    </div>
  );
}
export default Modal;
