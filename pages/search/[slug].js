import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function SearchDetails({ all, filters, slug }) {
  const {} = useStatus(filters);
  const {} = useFilters("Search");

  // console.log("Search All: ", all);
  // console.log("Search Filters: ", filters);
  // console.log("Slug: ", slug);

  return (
    <>
      <Head>
        <title>Games | {slug}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={slug} />
        <meta name="description" content={`Games including ${slug}`} />
      </Head>
      <GameCards
        title={`Search results for "${slug}".`}
        filters={all.filters}
      />
    </>
  );
}

export default SearchDetails;

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
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${params.slug}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${params.slug}&page_size=40${ordering}${dates}`,
      options
    ),
  ]);

  all = await all.json();
  filters = await filters.json();

  return {
    props: {
      all,
      filters,
      slug: params.slug,
    },
  };
}
