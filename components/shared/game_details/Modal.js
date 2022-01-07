import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Modal() {
  const { appState } = useContext(AppContext);
  return (
    <div className="modal">
      <h1>Modal</h1>
    </div>
  );
}
export default Modal;
