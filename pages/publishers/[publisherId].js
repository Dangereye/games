import useUpdateState from '../../hooks/useUpdateState';
import useFilters from '../../hooks/useFilters';
import PageTemplate from '../../components/shared/PageTemplate';
import Filters from '../../components/shared/filters/Filters';
import GameCards from '../../components/shared/game_cards/GameCards';
import fetchRawgData from '../../utils/fetchRawgData';

function Publishers({ data }) {
  useUpdateState(data);
  useFilters();

  return (
    <PageTemplate>
      <Filters />
      <GameCards title='Games List' />
    </PageTemplate>
  );
}

export default Publishers;

export async function getServerSideProps(context) {
  const { params, query, req } = context;
  const { publisherId } = params;
  const { ordering = '', dates = '', genres = '' } = query;

  const filters = {
    publishers: publisherId,
    filter: true,
    comments: true,
  };

  if (ordering) filters.ordering = ordering;
  if (dates) filters.dates = dates;
  if (genres) filters.genres = genres;

  const data = await fetchRawgData(filters, req, 'games');

  return {
    props: { data },
  };
}
