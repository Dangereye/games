import { useEffect } from "react";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";
import useStatus from "../../hooks/useStatus";

function SearchDetails({ initial, slug }) {
  const validateStatus = useStatus();
  console.log("Search: ", initial);

  useEffect(() => {
    validateStatus(initial);
  }, [initial]);

  return (
    <>
      <Head>
        <title>Games | {slug}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={slug} />
        <meta name="description" content={`Games including ${slug}`} />
      </Head>
      <GameCards title={`Search results for "${slug}".`} />
    </>
  );
}

export default SearchDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${params.slug}&page_size=40`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const initial = await res.json();

  return {
    props: {
      initial,
      slug: params.slug,
    },
  };
}
