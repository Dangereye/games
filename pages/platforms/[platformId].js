import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function GamesList({ data, status }) {
  const { appState } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>{appState.data.seo_title}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={appState.data.seo_keywords} />
        <meta name="description" content={appState.data.seo_description} />
      </Head>
      <GameCards data={data} status={status} />
    </>
  );
}
export default GamesList;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://api.rawg.io/api/games?platforms=${params.platformId}&page_size=40&filter=true&comments=true&key=${process.env.API_KEY}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  console.log(`Response status: ${res.status} - ${res.statusText}`);

  const data = await res.json();

  return { props: { data, status: `${res.status} - ${res.statusText}` } };
}
