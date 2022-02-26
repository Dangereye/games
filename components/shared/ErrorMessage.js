import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

function ErrorMessage() {
  const { appState } = useContext(AppContext);
  return (
    <>
      <h1 className="display-title">Network error.</h1>
      <p>{appState.error.message}.</p>
    </>
  );
}
export default ErrorMessage;
