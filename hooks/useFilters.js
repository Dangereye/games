import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useRouter } from "next/router";

function useFilters() {
  const { appState } = useContext(AppContext);
  const filter = appState.filters;
  const router = useRouter();
  const { asPath } = router;

  const handleFilters = () => {
    router.push(
      `${asPath.split("?")[0]}${`?ordering=${filter.ordering.value}`}${
        filter.dates.value ? `&dates=${filter.dates.value}` : ""
      }
      `
    );
  };

  return { handleFilters, asPath, filter };
}

export default useFilters;
