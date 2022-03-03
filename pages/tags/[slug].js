import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import PageTemplate from "../../components/shared/PageTemplate";
import Filters from "../../components/shared/filters/Filters";
import GameCards from "../../components/shared/game_cards/GameCards";

function Tags({ all, filters }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(filters);
  const {} = useFilters("Tags");

  return (
    <>
      <Head>
        <title>{appState.data.seo_title}</title>
        <meta name="keywords" content={appState.data.seo_keywords} />
        <meta name="description" content={appState.data.seo_description} />
      </Head>
      <PageTemplate title={all.seo_h1}>
        <Filters years={all.filters.years} genres={all.filters.genres} />
        <GameCards title="Games List" />
      </PageTemplate>
    </>
  );
}
export default Tags;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const dates = query.dates ? `&dates=${query.dates}` : "";
  let [all, filters] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?tags=${params.slug}&filter=true&comments=true&key=${process.env.API_KEY}${ordering}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?tags=${params.slug}&page_size=40&filter=true&comments=true&key=${process.env.API_KEY}${ordering}${dates}`,
      options
    ),
  ]);

  all = await all.json();
  filters = await filters.json();

  return {
    props: { all, filters },
  };
}
