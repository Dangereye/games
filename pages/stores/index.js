import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
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
import useUpdateState from "../../hooks/useUpdateState";
import PageTemplate from "../../components/shared/PageTemplate";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function GameStores({ stores }) {
  const { appState } = useContext(AppContext);
  const {} = useUpdateState(stores);
  return (
    <PageTemplate title="Stores">
      <MiscCards title="Stores list">
        {appState.data.results.map((store, i) => (
          <MiscCard
            key={`store-${i}`}
            icon={GetSVG(store.slug)}
            data={store}
            href={`stores/${store.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
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
