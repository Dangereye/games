import { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useStatus from "../../hooks/useStatus";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function GamesList({ initial }) {
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();

  useEffect(() => {
    validateStatus(initial);
  }, [initial]);

  return (
    <>
      <Head>
        <title>{appState.data.seo_title}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={appState.data.seo_keywords} />
        <meta name="description" content={appState.data.seo_description} />
      </Head>
      <GameCards />
    </>
  );
}
export default GamesList;

export async function getServerSideProps(context) {
  const { params, query } = context;
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const res = await fetch(
    `https://api.rawg.io/api/games?platforms=${params.platformId}&page_size=40&filter=true&comments=true&key=${process.env.API_KEY}${ordering}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const initial = await res.json();

  return {
    props: { initial },
  };
}
