import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { GenresSVG } from "../../components/shared/CategoriesSVGs";
import { BiCategory } from "react-icons/bi";
import useStatus from "../../hooks/useStatus";
import Head from "next/head";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Genres({ genres }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(genres);
  return (
    <>
      <Head>
        <title>Games | Genres</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game genres." />
      </Head>
      <MiscCards title="Genres">
        {appState.data.results.map((g, i) => (
          <MiscCard
            key={`genre-${i}`}
            icon={<GenresSVG />}
            data={g}
            href={`/genres/${g.id}`}
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
