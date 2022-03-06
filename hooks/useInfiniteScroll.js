import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import useClientFetch from "./useClientFetch";

function useInfiniteScroll() {
  const { appState } = useContext(AppContext);
  const [element, setElement] = useState(null);

  const addContent = useClientFetch();

  const options = { rootMargin: "800px" };

  const callBack = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      addContent(appState.data.next);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);

    if (appState.infinite_scroll && appState.data.next && element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element]);

  return { element, setElement };
}
export default useInfiniteScroll;
