import useUpdateState from '../hooks/useUpdateState';
import useFilters from '../hooks/useFilters';
import PageTemplate from '../components/shared/PageTemplate';
import Filters from '../components/shared/filters/Filters';
import GameCards from '../components/shared/game_cards/GameCards';
import fetchRawgData from '../utils/fetchRawgData';

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
  const { query, req } = context;
  const { ordering = '', dates = '', genres = '' } = query;

  const data = await fetchRawgData(
    {
      ordering,
      dates,
      genres,
      filter: true,
      comments: true,
    },
    req,
    'games'
  );

  return {
    props: { data },
  };
}
