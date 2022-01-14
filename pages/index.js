import { useEffect } from "react";
import useStatus from "../hooks/useStatus";
import GameCards from "../components/shared/game_cards/GameCards";
import Head from "next/head";

function Home({ initial }) {
  const validateStatus = useStatus();

  useEffect(() => {
    validateStatus(initial);
  }, [initial]);

  return (
    <>
      <Head>
        <title>Games | Video Game Database</title>
        <meta name="author" content="Craig Puxty" />
        <meta
          name="description"
          content="Video game database and discovery service - powered by RAWG.IO"
        />
      </Head>
      <GameCards />
    </>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const { query } = context;
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const res = await fetch(
    `https://api.rawg.io/api/games/lists/main?key=${process.env.API_KEY}&page_size=40${ordering}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log(res.url);
  const initial = await res.json();

  return {
    props: { initial },
  };
}
