import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useUpdateState from '../../hooks/useUpdateState';
import PageTemplate from '../../components/shared/PageTemplate';
import MiscCards from '../../components/shared/misc_cards/MiscCards';
import MiscCard from '../../components/shared/misc_cards/MiscCard';
import fetchRawgData from '../../utils/fetchRawgData';

function Genres({ genres }) {
  const { appState } = useContext(AppContext);
  useUpdateState(genres);

  return (
    <PageTemplate title='Genres'>
      <MiscCards title='Genres list'>
        {appState.data.results.map((genre, i) => (
          <MiscCard
            key={`genre-${i}`}
            data={genre}
            href={`/genres/${genre.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}

export default Genres;

export async function getServerSideProps({ req }) {
  const genres = await fetchRawgData({ page_size: 40 }, req, 'genres');

  return {
    props: { genres },
  };
}
