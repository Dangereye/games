import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useUpdateState from '../../hooks/useUpdateState';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import PageTemplate from '../../components/shared/PageTemplate';
import MiscCards from '../../components/shared/misc_cards/MiscCards';
import MiscCard from '../../components/shared/misc_cards/MiscCard';
import fetchRawgData from '../../utils/fetchRawgData';

function Developers({ developers }) {
  const { appState } = useContext(AppContext);
  useUpdateState(developers);
  const { setElement } = useInfiniteScroll();

  return (
    <PageTemplate title='Developers'>
      <MiscCards title='Developer list'>
        {appState.data.results.map((d, i, arr) => (
          <MiscCard
            ref={i === arr.length - 1 ? setElement : null}
            key={`developer-${i}`}
            data={d}
            href={`/developers/${d.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}

export default Developers;

export async function getServerSideProps(context) {
  const developers = await fetchRawgData(
    context.query,
    context.req,
    'developers'
  );

  return {
    props: { developers },
  };
}
