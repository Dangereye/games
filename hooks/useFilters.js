import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FiltersContext } from "../contexts/FiltersContext";

function useFilters() {
  const { filtersState } = useContext(FiltersContext);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    const ordering = `?ordering=${filtersState.ordering.value}`;
    const years = filtersState.years.value
      ? `&dates=${filtersState.years.value}`
      : "";
    const genres = filtersState.genres.value
      ? `&genres=${filtersState.genres.value}`
      : "";
    router.push(`${asPath.split("?")[0]}${ordering}${years}${genres}`);
  }, [
    asPath,
    filtersState.ordering.value,
    filtersState.years.value,
    filtersState.genres.value,
  ]);

  return {};
}

export default useFilters;
