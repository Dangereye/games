import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { GetSVG } from '../../components/shared/svg_functions/StoresSVGs';
import useUpdateState from '../../hooks/useUpdateState';
import PageTemplate from '../../components/shared/PageTemplate';
import MiscCards from '../../components/shared/misc_cards/MiscCards';
import MiscCard from '../../components/shared/misc_cards/MiscCard';
import fetchRawgData from '../../utils/fetchRawgData';

function GameStores({ stores }) {
  const { appState } = useContext(AppContext);
  useUpdateState(stores);

  return (
    <PageTemplate title='Stores'>
      <MiscCards title='Stores list'>
        {appState.data.results.map((store, i) => (
          <MiscCard
            key={`store-${i}`}
            icon={GetSVG(store.slug)}
            data={store}
            href={`/stores/${store.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}

export default GameStores;

export async function getServerSideProps({ req }) {
  const stores = await fetchRawgData({ page_size: 40 }, req, 'stores');

  return {
    props: { stores },
  };
}
