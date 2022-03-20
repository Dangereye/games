import { useContext } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AppContext } from "../../../contexts/AppContext";
import Button from "../../shared/buttons/Button";
function NextButton({ func }) {
  const { appState } = useContext(AppContext);

  return (
    <>
      {appState.modal.index < appState.modal.data.length - 1 && (
        <Button
          name={<MdArrowForwardIos />}
          classes="modal__next"
          func={() => func(appState.modal.index)}
        />
      )}
    </>
  );
}
export default NextButton;
