import Head from "next/head";
import useStatus from "../hooks/useStatus";
import useFilters from "../hooks/useFilters";
import GameCards from "../components/shared/game_cards/GameCards";

function Home({ all, filters }) {
  const {} = useStatus(filters);
  const {} = useFilters("Index");

  console.log("Home All: ", all);
  console.log("Home Filters: ", filters);

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
      <GameCards title={all.seo_h1} filters={all.filters} />
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

  const ordering = `&ordering=${query.ordering}`;
  const dates = query.dates ? `&dates=${query.dates}` : "";
  const genres = query.genres ? `&genres=${query.genres}` : "";

  let [all, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?filter=true&comments=true&key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40${ordering}${dates}${genres}`,
      options
    ),
  ]);
  all = await all.json();
  filters = await filters.json();

  return {
    props: { all, filters },
  };
}
