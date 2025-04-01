import useUpdateState from '../../hooks/useUpdateState';
import useFilters from '../../hooks/useFilters';
import PageTemplate from '../../components/shared/PageTemplate';
import Filters from '../../components/shared/filters/Filters';
import GameCards from '../../components/shared/game_cards/GameCards';
import fetchRawgData from '../../utils/fetchRawgData';

function SearchDetails({ data, slug }) {
  useUpdateState(data);
  useFilters();

  return (
    <PageTemplate postTitle={`Matching "${slug}"`}>
      <Filters />
      <GameCards title='Games List' />
    </PageTemplate>
  );
}

export default SearchDetails;

export async function getServerSideProps(context) {
  const { params, query, req } = context;
  const { slug } = params;
  const { ordering = '', dates = '', genres = '' } = query;

  const filters = {
    search: slug,
    filter: true,
    comments: true,
  };

  if (ordering) filters.ordering = ordering;
  if (dates) filters.dates = dates;
  if (genres) filters.genres = genres;

  const data = await fetchRawgData(filters, req, 'games');

  return {
    props: {
      data,
      slug,
    },
  };
}
