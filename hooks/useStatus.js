import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "../contexts/AppContext";

function useStatus(data) {
  const { appDispatch } = useContext(AppContext);

  useEffect(() => {
    if (data.error) {
      appDispatch({
        type: "ERROR",
        payload: { isError: true, message: data.error },
      });
    } else {
      appDispatch({
        type: "SUCCESS",
        payload: data,
      });
    }
  }, [data]);

  return { data };
}

export default useStatus;
