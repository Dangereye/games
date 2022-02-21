import Head from "next/head";
import MiscCards from "../../components/shared/misc-cards/MiscCards";
import MiscCard from "../../components/shared/misc-cards/MiscCard";

function GameStores({ stores }) {
  console.log("Stores: ", stores);
  return (
    <>
      <Head>
        <title>Games | Stores</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game stores." />
      </Head>
      <MiscCards title="Game Stores.">
        {stores.results.map((store, index) => (
          <MiscCard
            title={store.name}
            subtitle="Popular Games"
            data={store}
            key={`store-${index}`}
          />
        ))}
      </MiscCards>
    </>
  );
}
export default GameStores;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/stores?key=${process.env.API_KEY}`,
    options
  );
  const stores = await res.json();

  return {
    props: { stores },
  };
}
