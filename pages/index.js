import fetchRawgData from '../utils/fetchRawgData';
import useUpdateState from '../hooks/useUpdateState';
import useFilters from '../hooks/useFilters';
import PageTemplate from '../components/shared/PageTemplate';
import Filters from '../components/shared/filters/Filters';
import GameCards from '../components/shared/game_cards/GameCards';

function Home({ data }) {
  useFilters();
  useUpdateState(data);

  return (
    <PageTemplate>
      <Filters />
      <GameCards title='Games List' />
    </PageTemplate>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const data = await fetchRawgData(context.query, context.req, 'games');

  return {
    props: { data },
  };
}
