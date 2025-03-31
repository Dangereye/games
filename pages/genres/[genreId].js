import useUpdateState from '../../hooks/useUpdateState';
import useFilters from '../../hooks/useFilters';
import PageTemplate from '../../components/shared/PageTemplate';
import Filters from '../../components/shared/filters/Filters';
import GameCards from '../../components/shared/game_cards/GameCards';
import fetchRawgData from '../../utils/fetchRawgData';

function Genres({ data }) {
  const {} = useUpdateState(data);
  const {} = useFilters();

  return (
    <PageTemplate>
      <Filters />
      <GameCards title='Games List' />
    </PageTemplate>
  );
}
export default Genres;

export async function getServerSideProps(context) {
  const { params, query, req } = context;
  const { genreId } = params;
  const { ordering = '', dates = '', genres = '' } = query;

  const data = await fetchRawgData(
    {
      genres: genreId,
      ordering,
      dates,
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
