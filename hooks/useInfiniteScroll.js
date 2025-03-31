import { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { AppContext } from '../contexts/AppContext';
import useClientFetch from './useClientFetch';

function useInfiniteScroll() {
  const { appState } = useContext(AppContext);
  const [element, setElement] = useState(null);
  const addContent = useClientFetch();

  const options = useMemo(() => ({ rootMargin: '800px' }), []);

  const callBack = useCallback(
    (entries) => {
      const entry = entries[0];
      if (
        entry.isIntersecting &&
        !appState.isLoadingMore &&
        appState.data.next
      ) {
        addContent(appState.data.next);
      }
    },
    [addContent, appState.data.next, appState.isLoadingMore]
  );

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
  }, [
    element,
    appState.data.next,
    appState.infinite_scroll,
    callBack,
    options,
  ]);

  return { element, setElement };
}

export default useInfiniteScroll;
