import Head from "next/head";
import GameCards from "../../components/shared/game_cards/GameCards";

function SearchDetails({ data, status, slug }) {
  console.log("Search: ", data);
  return (
    <>
      <Head>
        <title>Games | {slug}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={slug} />
        <meta name="description" content={`Games including ${slug}`} />
      </Head>
      <GameCards
        data={data}
        status={status}
        title={`Search results for "${slug}".`}
      />
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

  console.log(`Response status: ${res.status} - ${res.statusText}`);
  console.log(`Game: ${params.game}`);

  const data = await res.json();

  return {
    props: {
      data,
      status: `${res.status} - ${res.statusText}`,
      slug: params.slug,
    },
  };
}
