import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { RiBuilding2Line } from "react-icons/ri";
import useStatus from "../../hooks/useStatus";
import Head from "next/head";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Publishers({ publishers }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(publishers);
  console.log("Publishers: ", publishers);

  return (
    <>
      <Head>
        <title>Games | Publishers</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game publishers." />
      </Head>
      <MiscCards title="Game Publishers.">
        {appState.data.results.map((publisher, index) => (
          <MiscCard
            id={publisher.id}
            icon={<RiBuilding2Line />}
            title={publisher.name}
            subtitle="Popular Games"
            data={publisher}
            path="publishers"
            key={`publisher-${index}`}
          />
        ))}
      </MiscCards>
    </>
  );
}
export default Publishers;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&page_size=40`,
    options
  );
  const publishers = await res.json();

  return {
    props: { publishers },
  };
}
