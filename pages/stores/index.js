import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useStatus from "../../hooks/useStatus";
import Head from "next/head";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";
import {
  GetSVG,
  Steam,
  PlayStationStore,
  XboxStore,
  AppleStore,
  GogStore,
  NintendoStore,
  GooglePlayStore,
  ItchIo,
  EpicGamesStore,
} from "../../components/shared/StoresSVGs";

function GameStores({ stores }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(stores);
  console.log("Stores: ", stores);
  return (
    <>
      <Head>
        <title>Games | Stores</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game stores." />
      </Head>
      <MiscCards title="Stores">
        {appState.data.results.map((s, i) => (
          <MiscCard
            key={`store-${i}`}
            icon={GetSVG(s.slug)}
            data={s}
            href={`stores/${s.id}`}
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
