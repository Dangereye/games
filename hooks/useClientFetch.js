import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function useClientFetch() {
  const { appState, appDispatch } = useContext(AppContext);

  // ✅ Rewrites RAWG's full next URL to your internal /api/rawg route
  const getLocalUrlFromRawgNext = (rawgUrl) => {
    try {
      const url = new URL(rawgUrl);
      const path = url.pathname.replace('/api/', '');
      const params = new URLSearchParams(url.search);

      // 🔒 Strip the API key if present
      params.delete('key');

      return `/api/rawg?path=${path}&${params.toString()}`;
    } catch (err) {
      console.error('❌ Failed to parse RAWG next URL:', rawgUrl);
      return null;
    }
  };

  const addContent = async (rawgNextUrl) => {
    appDispatch({ type: 'LOADING_MORE' });

    const localUrl = getLocalUrlFromRawgNext(rawgNextUrl);
    if (!localUrl) return;

    try {
      const res = await fetch(localUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw Error(`${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      const addedGames = appState.data.results.concat(data.results);

      appDispatch({
        type: 'LOAD_MORE_GAMES',
        payload: { results: addedGames, next: data.next },
      });
    } catch (err) {
      appDispatch({
        type: 'ERROR',
        payload: {
          isError: true,
          status: err.message,
          message:
            'Something went wrong. Not to worry — either refresh the page and try again, or come back later.',
        },
      });
    }
  };

  return addContent;
}

export default useClientFetch;
