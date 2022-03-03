import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { GenresSVG } from "../../components/shared/CategoriesSVGs";
import useStatus from "../../hooks/useStatus";
import PageTemplate from "../../components/shared/PageTemplate";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Genres({ genres }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(genres);
  return (
    <PageTemplate title="genres">
      <MiscCards title="Genres list">
        {appState.data.results.map((genre, i) => (
          <MiscCard
            key={`genre-${i}`}
            icon={<GenresSVG />}
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
