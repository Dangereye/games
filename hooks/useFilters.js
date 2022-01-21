import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useRouter } from "next/router";

function useFilters() {
  const { appState } = useContext(AppContext);
  const filter = appState.filters;
  const active = appState.filters.active ? "?filters=true" : "";
  const router = useRouter();
  const { asPath } = router;

  const handleFilters = () => {
    router.push(
      `${asPath.split("?")[0]}${active}${
        filter.dates.value ? `&${filter.dates.query}=${filter.dates.value}` : ""
      }${
        filter.ordering.value
          ? `&${filter.ordering.query}=${filter.ordering.value}`
          : ""
      }
      `
    );
  };

  return { handleFilters, asPath, filter };
}

export default useFilters;
