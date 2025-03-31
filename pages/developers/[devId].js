import useUpdateState from '../../hooks/useUpdateState';
import useFilters from '../../hooks/useFilters';
import PageTemplate from '../../components/shared/PageTemplate';
import Filters from '../../components/shared/filters/Filters';
import GameCards from '../../components/shared/game_cards/GameCards';
import fetchRawgData from '../../utils/fetchRawgData';

function Developers({ data, developer }) {
  useUpdateState(data);
  useFilters();

  return (
    <PageTemplate title={`Developed by ${developer?.name}`}>
      <Filters />
      <GameCards title={`Games by ${developer?.name}`} />
    </PageTemplate>
  );
}

export default Developers;

export async function getServerSideProps(context) {
  const { params, query, req } = context;
  const { devId } = params;
  const { ordering = '', dates = '', genres = '' } = query;

  // 🔁 Fetch the list of games filtered by developer
  const data = await fetchRawgData(
    {
      developers: devId,
      ordering,
      dates,
      genres,
      filter: true,
      comments: true,
    },
    req,
    'games'
  );

  // 🔁 Fetch metadata for the developer (name, etc.)
  const metaRes = await fetch(
    `https://api.rawg.io/api/developers/${devId}?key=${process.env.API_KEY}`
  );
  const developer = await metaRes.json();

  return {
    props: {
      data,
      developer,
    },
  };
}
