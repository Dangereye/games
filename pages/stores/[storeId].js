import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";
import PageTemplate from "../../components/shared/PageTemplate";
import Filters from "../../components/shared/filters/Filters";

function Stores({ all, filtered }) {
  const {} = useStatus(filtered);
  const {} = useFilters("Stores");
  return (
    <>
      <Head>
        <title>Games | {all.seo_h1}</title>
      </Head>
      <PageTemplate title={all.seo_h1}>
        <Filters years={all.filters.years} genres={all.filters.genres} />
        <GameCards title="Games List" />
      </PageTemplate>
    </>
  );
}
export default Stores;

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

  let [all, filtered] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?stores=${params.storeId}&filter=true&comments=true&key=${process.env.API_KEY}`,
      options
    ),

    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40&stores=${params.storeId}${ordering}${dates}${genres}`,
      options
    ),
  ]);
  all = await all.json();
  filtered = await filtered.json();

  return {
    props: { all, filtered },
  };
}
