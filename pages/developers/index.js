import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { BsCodeSlash } from "react-icons/bs";
import useStatus from "../../hooks/useStatus";
import Head from "next/head";
import MiscCard from "../../components/shared/misc_cards/MiscCard";
import MiscCards from "../../components/shared/misc_cards/MiscCards";

function Developers({ developers }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(developers);
  console.log("Developers", developers);

  return (
    <>
      <Head>
        <title>Games | Developers</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game developers." />
      </Head>
      <MiscCards title="Game Developers.">
        {appState.data.results.map((developer, index) => (
          <MiscCard
            id={developer.id}
            icon={<BsCodeSlash />}
            title={developer.name}
            subtitle="Popular Games"
            data={developer}
            path="developers"
            key={`developer-${index}`}
          />
        ))}
      </MiscCards>
    </>
  );
}
export default Developers;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&page_size=40`,
    options
  );
  const developers = await res.json();

  return {
    props: { developers },
  };
}
