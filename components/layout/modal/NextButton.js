import { useContext } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AppContext } from "../../../contexts/AppContext";
function NextButton({ func }) {
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
export default NextButton;
