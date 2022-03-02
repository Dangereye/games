import useStatus from "../hooks/useStatus";
import useFilters from "../hooks/useFilters";
import GameCards from "../components/shared/game_cards/GameCards";
import PageTemplate from "../components/shared/PageTemplate";
import Filters from "../components/shared/filters/Filters";

function Home({ all, filtered }) {
  const {} = useStatus(filtered);
  const {} = useFilters("Index");

  return (
    <PageTemplate heading={all.seo_h1}>
      <Filters years={all.filters.years} genres={all.filters.genres} />
      <GameCards />
    </PageTemplate>
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

  let [all, filtered] = await Promise.all([
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
  filtered = await filtered.json();

  return {
    props: { all, filtered },
  };
}
