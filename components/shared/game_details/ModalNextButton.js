import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { MdArrowForwardIos } from "react-icons/md";
function ModalNextButton({ func }) {
  const { appState } = useContext(AppContext);

  return (
    <>
      {appState.modal.index < appState.modal.data.length - 1 && (
        <div className="modal__next" onClick={() => func(appState.modal.index)}>
          <MdArrowForwardIos />
        </div>
      )}
    </>
  );
}
export default ModalNextButton;
