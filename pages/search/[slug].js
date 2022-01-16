import { useEffect } from "react";
import useStatus from "../../hooks/useStatus";
import useFilters from "../../hooks/useFilters";
import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function SearchDetails({ initial, slug }) {
  const validateStatus = useStatus();
  const { handleFilters, asPath, filter } = useFilters();
  console.log("Search: ", initial);

  useEffect(() => {
    validateStatus(initial);
  }, [initial]);

  useEffect(() => {
    handleFilters();
  }, [asPath, filter]);

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
  const { params, query } = context;
  const ordering = query.ordering ? `&ordering=${query.ordering}` : "";
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${params.slug}&page_size=40${ordering}`,
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
