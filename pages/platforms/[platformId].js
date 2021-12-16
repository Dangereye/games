import { useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import Head from "next/head";
import GameCard from "../../components/shared/GameCard";
import Button from "../../components/shared/Button";
import Loader from "../../components/shared/Loader";

function GamesList({ data, status }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  console.log("Platform Data: ", data);

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
  }, [data]);

  return (
    <>
      <Head>
        <title>{data.seo_title}</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="keywords" content={data.seo_keywords} />
        <meta name="description" content={data.seo_description} />
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
export default GamesList;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://api.rawg.io/api/games?platforms=${params.platformId}&page_size=40&comments=true&key=${process.env.API_KEY}`,
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
