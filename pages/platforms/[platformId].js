import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import PageTemplate from "../../components/shared/PageTemplate";
import Filters from "../../components/shared/filters/Filters";
import GameCards from "../../components/shared/game_cards/GameCards";

function Platforms({ all, filtered }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(filtered);
  const {} = useFilters("Platforms");

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
  const genres = query.genres ? `&genres=${query.genres}` : "";

  let [all, filtered] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?platforms=${params.platformId}&filter=true&comments=true&key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?platforms=${params.platformId}&page_size=40&key=${process.env.API_KEY}${ordering}${dates}${genres}`,
      options
    ),
  ]);

  all = await all.json();
  filtered = await filtered.json();

  return {
    props: { all, filtered },
  };
}
