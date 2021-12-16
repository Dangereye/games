import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AppContext } from "../contexts/AppContext";
import Head from "next/head";
import GameCard from "../components/shared/GameCard";
import Button from "../components/shared/Button";
import Loader from "../components/shared/Loader";

function Home({ data, status }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  console.log("Data: ", data);

  useEffect(() => {
    if (data.error) {
      appDispatch({
        type: "ERROR",
        payload: { isError: true, status, message: data.error },
      });
    }
    if (data.results) {
      appDispatch({ type: "SUCCESS", payload: data.results });
    }
  }, []);

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
          {appState.isLoading ? (
            <Loader />
          ) : appState.error.isError ? (
            <>
              <h1 className="page-title">Error: {appState.error.status}.</h1>
              <p>{appState.error.message}.</p>
            </>
          ) : (
            <>
              <h1 className="page-title">{data.seo_h1}</h1>
              <div className="grid grid--multiple">
                {appState.games.map((game) => (
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
  let data = [];
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=14`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  console.log(`Response status: ${res.status} - ${res.statusText}`);

  data = await res.json();

  return { props: { data, status: `${res.status} - ${res.statusText}` } };
}
