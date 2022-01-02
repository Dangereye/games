import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import Head from "next/head";
import useStatus from "../../hooks/useStatus";
import GameCards from "../../components/shared/game_cards/GameCards";
function Publishers({ pub, games }) {
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();
  console.log("Publisher: ", pub);
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
      <GameCards title={`Games for ${pub.name}`} />
    </>
  );
}

export default Publishers;

export async function getServerSideProps(context) {
  const { params } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  let [pub, games] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/publishers/${params.pubId}?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games?publishers=${params.pubId}&key=${process.env.API_KEY}`,
      options
    ),
  ]);

  pub = await pub.json();
  games = await games.json();

  return {
    props: {
      pub,
      games,
    },
  };
}
