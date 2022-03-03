import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import PageTemplate from "../../components/shared/PageTemplate";
import Filters from "../../components/shared/filters/Filters";
import GameCards from "../../components/shared/game_cards/GameCards";

function Tags({ all, filtered }) {
  const {} = useStatus(filtered);
  const {} = useFilters("Tags");

  return (
    <>
      <Head>
        <title>{all.seo_title}</title>
        <meta name="keywords" content={all.seo_keywords} />
        <meta name="description" content={all.seo_description} />
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
  const genres = query.genres ? `&genres=${query.genres}` : "";

  let [all, filtered] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&tags=${params.slug}&filter=true&comments=true`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&tags=${params.slug}&page_size=40&${ordering}${dates}${genres}`,
      options
    ),
  ]);

  all = await all.json();
  filtered = await filtered.json();

  return {
    props: { all, filtered },
  };
}
