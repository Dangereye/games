import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { FiltersContext } from '../contexts/FiltersContext';

function useFilters() {
  const { filtersState } = useContext(FiltersContext);
  const { push, query, asPath } = useRouter();

  useEffect(() => {
    const ordering = `?ordering=${filtersState.ordering.value}`;
    const years = filtersState.years.value
      ? `&dates=${filtersState.years.value}`
      : '';
    const genres = filtersState.genres.value
      ? `&genres=${filtersState.genres.value}`
      : '';

    // ✅ Build the clean URL
    const newUrl = `${asPath.split('?')[0]}${ordering}${years}${genres}`;

    // ✅ Only push if URL actually changes
    if (asPath !== newUrl) {
      push(newUrl);
    }
  }, [
    asPath,
    filtersState.ordering.value,
    filtersState.years.value,
    filtersState.genres.value,
    query.devId,
    push,
  ]);

  return {};
}

export default useFilters;
