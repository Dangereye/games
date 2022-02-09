import { useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useRouter } from "next/router";

function useFilters(route) {
  const { appState } = useContext(AppContext);
  const router = useRouter();
  const { asPath } = router;

  const ordering = `?ordering=${appState.filters.ordering.value}`;
  const dates = appState.filters.dates.value
    ? `&dates=${appState.filters.dates.value}`
    : "";
  const genres = appState.filters.genres.value
    ? `&genres=${appState.filters.genres.value}`
    : "";

  useEffect(() => {
    console.log(`Updating ${route} Route`);
    router.push(`${asPath.split("?")[0]}${ordering}${dates}${genres}`);
  }, [appState.filters, asPath, ordering, dates, genres]);

  return { ordering, dates, genres };
}

export default useFilters;
