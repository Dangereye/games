import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function Developers({ dev, all, filters }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(filters);
  const {} = useFilters("Developers");

  // console.log("Developer: ", dev);
  // console.log("Developer All: ", all);
  // console.log("Developer Filters: ", filters);

  return (
    <>
      <Head>
        <title>{appState.data.seo_title}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={appState.data.seo_keywords} />
        <meta name="description" content={appState.data.seo_description} />
      </Head>
      <GameCards title={`Games for ${dev.name}`} filters={all.filters} />
    </>
  );
}

export default Developers;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const dates = query.dates ? `&dates=${query.dates}` : "";

  let [dev, all, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/developers/${params.devId}?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?developers=${params.devId}&key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?developers=${params.devId}&page_size=40&key=${process.env.API_KEY}${ordering}${dates}`,
      options
    ),
  ]);

  dev = await dev.json();
  all = await all.json();
  filters = await filters.json();

  return {
    props: {
      dev,
      all,
      filters,
    },
  };
}
