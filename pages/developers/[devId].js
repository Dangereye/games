import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import Head from "next/head";
import useStatus from "../../hooks/useStatus";
import GameCards from "../../components/shared/game_cards/GameCards";
function Developers({ dev, games }) {
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();
  console.log("Developer: ", dev);
  console.log("Games: ", games);

  useEffect(() => {
    validateStatus(games);
  }, [games]);

  return (
    <>
      <Head>
        <title>{appState.data.seo_title}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={appState.data.seo_keywords} />
        <meta name="description" content={appState.data.seo_description} />
      </Head>
      <GameCards title={`Developed By ${dev.name}`} />
    </>
  );
}

export default Developers;

export async function getServerSideProps(context) {
  const { params } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  let [dev, games] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/developers/${params.devId}?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?developers=${params.devId}&key=${process.env.API_KEY}`,
      options
    ),
  ]);

  dev = await dev.json();
  games = await games.json();

  return {
    props: {
      dev,
      games,
    },
  };
}
