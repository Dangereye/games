import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import Head from "next/head";
import useStatus from "../../hooks/useStatus";
import GameCards from "../../components/shared/game_cards/GameCards";
import useFilters from "../../hooks/useFilters";

function Publishers({ pub, all, filters }) {
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();
  const { handleFilters, asPath, filter } = useFilters();
  console.log("Publisher: ", pub);
  console.log("Publisher All: ", all);
  console.log("Publisher Filters: ", filters);

  useEffect(() => {
    validateStatus(filters);
  }, [pub, all, filters]);

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
      <GameCards
        title={`Games for ${pub.name}`}
        filters={all.filters ? all.filters : []}
      />
    </>
  );
}

export default Publishers;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const dates = query.dates ? `&dates=${query.dates}` : "";

  let [pub, all, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/publishers/${params.pubId}?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?publishers=${params.pubId}&key=${process.env.API_KEY}${ordering}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?publishers=${params.pubId}&key=${process.env.API_KEY}&page_size=40${ordering}${dates}`,
      options
    ),
  ]);

  pub = await pub.json();
  all = await all.json();
  filters = await filters.json();

  return {
    props: {
      pub,
      all,
      filters,
    },
  };
}
