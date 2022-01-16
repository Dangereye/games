import { useEffect } from "react";
import useStatus from "../hooks/useStatus";
import useFilters from "../hooks/useFilters";
import Head from "next/head";
import GameCards from "../components/shared/game_cards/GameCards";

function Home({ initial }) {
  const validateStatus = useStatus();
  const { handleFilters, asPath, filter } = useFilters();

  useEffect(() => {
    validateStatus(initial);
  }, [initial]);

  useEffect(() => {
    handleFilters();
  }, [asPath, filter]);

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
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40${ordering}`,
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
