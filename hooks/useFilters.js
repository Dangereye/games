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
      `${asPath.split("?")[0]}${
        filter.ordering.value
          ? `?${filter.ordering.query}=${filter.ordering.value}`
          : ""
      }`
    );
  };
  return handleFilters;
}

export default useFilters;
