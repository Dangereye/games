import useUpdateState from "../../hooks/useUpdateState";
import useFilters from "../../hooks/useFilters";
import PageTemplate from "../../components/shared/PageTemplate";
import Filters from "../../components/shared/filters/Filters";
import GameCards from "../../components/shared/game_cards/GameCards";

function Stores({ data }) {
  const {} = useUpdateState(data);
  const {} = useFilters();
  return (
    <PageTemplate>
      <Filters />
      <GameCards title="Games List" />
    </PageTemplate>
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

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&stores=${params.storeId}&page_size=40&filter=true&comments=true${ordering}${dates}${genres}`,
    options
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
