import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function useStatus() {
  const { appDispatch } = useContext(AppContext);
  const validateStatus = (data, status) => {
    if (data.error) {
      appDispatch({
        type: "ERROR",
        payload: { isError: true, status, message: data.error },
      });
    }
    if (data.results) {
      appDispatch({ type: "SUCCESS", payload: data.results });
    }
  };
  return validateStatus;
}

export default useStatus;
