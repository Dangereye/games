import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Head from "next/head";

import GameCard from "../components/shared/GameCard";
import Button from "../components/shared/Button";

function Home({ data }) {
  const { themeState } = useContext(ThemeContext);

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
      <section className="section" style={{ color: themeState.text.primary }}>
        <div className="container">
          {!data.results && (
            <>
              <h1 className="page-title">Network error.</h1>
              <p>Service temporarily unavailable.</p>
            </>
          )}
          {data.results && (
            <>
              <h1 className="page-title">{data.seo_h1}</h1>
              <div className="grid grid--multiple">
                {data.results.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))}
              </div>
              <Button
                name="Load More"
                styles="btn--large btn--accent btn--center"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=14`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();
  return { props: { data } };
}
