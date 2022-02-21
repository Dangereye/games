import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";
import useFilters from "../../hooks/useFilters";
import useStatus from "../../hooks/useStatus";

function DynamicStores({ store, filters }) {
  console.log("Store: ", store);
  console.log("Games: ", filters);
  const {} = useStatus(filters);
  const {} = useFilters("Stores");
  return (
    <>
      <Head>
        <title>Games | {`${store.name} Store Games.`}</title>
        <meta name="author" content="Craig Puxty" />
        <meta
          name="description"
          content="Video game database and discovery service - powered by RAWG.IO"
        />
      </Head>
      <GameCards title={`${store.name} Store Games.`} />
    </>
  );
}
export default DynamicStores;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };
  const ordering = `&ordering=${query.ordering}`;
  const dates = query.dates ? `&dates=${query.dates}` : "";
  const genres = query.genres ? `&genres=${query.genres}` : "";

  let [store, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/stores/${params.storeId}?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40&stores=${params.storeId}${ordering}${dates}${genres}`,
      options
    ),
  ]);
  store = await store.json();
  filters = await filters.json();

  return {
    props: { store, filters },
  };
}
