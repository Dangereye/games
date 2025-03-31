import useUpdateState from '../hooks/useUpdateState';
import useFilters from '../hooks/useFilters';
import PageTemplate from '../components/shared/PageTemplate';
import Filters from '../components/shared/filters/Filters';
import GameCards from '../components/shared/game_cards/GameCards';
import fetchGames from '../utils/fetchGames';

function Home({ data }) {
  const {} = useFilters();
  const {} = useUpdateState(data);

  return (
    <PageTemplate>
      <Filters />
      <GameCards title='Games List' />
    </PageTemplate>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const data = await fetchGames(context.query, context.req);
  return { props: { data } };
}
