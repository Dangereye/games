import { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function Platforms({ all, filters }) {
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();
  const { handleFilters, asPath, filter } = useFilters();
  console.log("Platforms All: ", all);
  console.log("Platforms Filters: ", filters);

  useEffect(() => {
    validateStatus(filters);
  }, [all, filters]);

  useEffect(() => {
    handleFilters();
  }, [asPath, filter]);

  return (
    <>
      <Head>
        <title>{appState.data.seo_title}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={appState.data.seo_keywords} />
        <meta name="description" content={appState.data.seo_description} />
      </Head>
      <GameCards title={all.seo_h1} filters={all.filters ? all.filters : []} />
    </>
  );
}
export default Platforms;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };
  const ordering = `&ordering=${query.ordering}`;
  const dates = query.dates ? `&dates=${query.dates}` : "";

  let [all, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?platforms=${params.platformId}&filter=true&comments=true&key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?platforms=${params.platformId}&page_size=40&key=${process.env.API_KEY}${ordering}${dates}`,
      options
    ),
  ]);

  all = await all.json();
  filters = await filters.json();

  return {
    props: { all, filters },
  };
}
