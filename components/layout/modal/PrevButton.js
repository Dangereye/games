import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { MdArrowBackIos } from "react-icons/md";
function PrevButton({ func }) {
  const { appState, appDispatch } = useContext(AppContext);
  return (
    <>
      {appState.modal.index > 0 && (
        <div className="modal__prev" onClick={() => func(appState.modal.index)}>
          <MdArrowBackIos />
        </div>
      )}
    </>
  );
}
export default PrevButton;
