import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { MdArrowBackIos } from "react-icons/md";
import Button from "../../shared/buttons/Button";
function PrevButton({ func }) {
  const { appState } = useContext(AppContext);
  return (
    <>
      {appState.modal.index > 0 && (
        <Button
          name={<MdArrowBackIos />}
          classes="modal__prev"
          func={() => func(appState.modal.index)}
        />
      )}
    </>
  );
}
export default PrevButton;
