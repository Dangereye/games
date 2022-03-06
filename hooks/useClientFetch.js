import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function useClientFetch() {
  const { appState, appDispatch } = useContext(AppContext);
  const addContent = async (url) => {
    appDispatch({ type: "LOADING_MORE" });

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw Error(` ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      const addedGames = await appState.data.results.concat(data.results);

      appDispatch({
        type: "LOAD_MORE_GAMES",
        payload: { results: addedGames, next: data.next },
      });
    } catch (err) {
      appDispatch({
        type: "ERROR",
        payload: {
          isError: true,
          status: err.message,
          message:
            "Something went wrong. Not to worry - either refresh the page and try again or...",
        },
      });
    }
  };

  return addContent;
}

export default useClientFetch;
