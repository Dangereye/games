import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { BiCategory } from "react-icons/bi";
import useStatus from "../../hooks/useStatus";
import Head from "next/head";
import MiscCards from "../../components/shared/misc-cards/MiscCards";
import MiscCard from "../../components/shared/misc-cards/MiscCard";
function Genres({ genres }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(genres);
  return (
    <>
      <Head>
        <title>Games | Publishers</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game publishers." />
      </Head>
      <MiscCards title="Game Genres.">
        {appState.data.results.map((genre, index) => (
          <MiscCard
            id={genre.id}
            icon={<BiCategory />}
            title={genre.name}
            subtitle="Popular Games"
            data={genre}
            path="genres"
            key={`genre-${index}`}
          />
        ))}
      </MiscCards>
    </>
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
