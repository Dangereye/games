import { useEffect } from "react";
import useStatus from "../hooks/useStatus";
import useFilters from "../hooks/useFilters";
import Head from "next/head";
import GameCards from "../components/shared/game_cards/GameCards";

function Home({ all, filters }) {
  const validateStatus = useStatus();
  const { handleFilters, asPath, filter } = useFilters();
  console.log("All Data: ", all);
  console.log("Filters Data: ", filters);

  useEffect(() => {
    validateStatus(filters.isActive ? filters.data : all);
  }, [all, filters]);

  useEffect(() => {
    handleFilters();
  }, [asPath, filter]);

  return (
    <>
      <Head>
        <title>Games | Video Game Database</title>
        <meta name="author" content="Craig Puxty" />
        <meta
          name="description"
          content="Video game database and discovery service - powered by RAWG.IO"
        />
      </Head>
      <GameCards title={`All Games`} years={all.filters.years} />
    </>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const { query } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };
  const activeFilters = query.filters ? true : false;
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const dates = query.dates ? `&dates=${query.dates}` : "";
  let [all, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40${ordering}${dates}`,
      options
    ),
  ]);
  all = await all.json();
  filters = await filters.json();
  console.log("Query", query);

  return {
    props: { all, filters: { isActive: activeFilters, data: filters } },
  };
}
