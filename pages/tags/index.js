import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useUpdateState from '../../hooks/useUpdateState';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import PageTemplate from '../../components/shared/PageTemplate';
import MiscCards from '../../components/shared/misc_cards/MiscCards';
import MiscCard from '../../components/shared/misc_cards/MiscCard';
import fetchRawgData from '../../utils/fetchRawgData';

function Tags({ tags }) {
  const { appState } = useContext(AppContext);
  useUpdateState(tags);
  const { setElement } = useInfiniteScroll();

  return (
    <PageTemplate title='Tags'>
      <MiscCards title='Tags list'>
        {appState.data.results.map((tag, i) => (
          <MiscCard
            ref={setElement}
            key={`tag-${i}`}
            data={tag}
            href={`/tags/${tag.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}

export default Tags;

export async function getServerSideProps({ req }) {
  const tags = await fetchRawgData({ page_size: 40 }, req, 'tags');

  return {
    props: { tags },
  };
}
