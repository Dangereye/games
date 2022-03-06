import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useUpdateState from "../../hooks/useUpdateState";
import PageTemplate from "../../components/shared/PageTemplate";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Genres({ genres }) {
  const { appState } = useContext(AppContext);
  const {} = useUpdateState(genres);
  return (
    <PageTemplate title="genres">
      <MiscCards title="Genres list">
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

export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&page_size=40`,
    options
  );
  const genres = await res.json();

  return {
    props: { genres },
  };
}
