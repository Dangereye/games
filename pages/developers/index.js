import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useUpdateState from '../../hooks/useUpdateState';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import PageTemplate from '../../components/shared/PageTemplate';
import MiscCards from '../../components/shared/misc_cards/MiscCards';
import MiscCard from '../../components/shared/misc_cards/MiscCard';
import fetchRawgData from '../../utils/fetchRawgData';

function Developers({ data }) {
  const { appState } = useContext(AppContext);
  useUpdateState(data);
  const { setElement } = useInfiniteScroll();

  return (
    <PageTemplate title='Developers'>
      <MiscCards title='Developer list'>
        {appState.data.results
          ?.filter((d) => d && typeof d.id !== 'undefined')
          .map((d, i) => (
            <MiscCard
              ref={setElement}
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
  const { req, query } = context;
  const { ordering = '', page = '' } = query;

  const data = await fetchRawgData(
    {
      ordering,
      page,
    },
    req,
    'developers'
  );

  return {
    props: { data },
  };
}
