import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import Head from "next/head";
import GameCard from "../../components/shared/GameCard";
import Button from "../../components/shared/Button";
import Loader from "../../components/shared/Loader";

function GamesList({ data }) {
  const { themeState } = useContext(ThemeContext);
  const { appState, appDispatch } = useContext(AppContext);
  console.log("Data: ", data);
  console.log("App: ", appState);

  useEffect(() => {
    if (appState.isLoading) {
      appDispatch({ type: "SUCCESS", payload: false });
    }
  }, [appState.isLoading]);

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
          {appState.isLoading && <Loader />}
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
export default GamesList;

export async function getServerSideProps(context) {
  const { params, query } = context;
  // console.log("Parameters: ", params);
  // console.log("Query: ", query);
  const res = await fetch(
    `https://api.rawg.io/api/games?platforms=${params.platformId}&page_size=14&filter=true&comments=true&key=${process.env.API_KEY}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();

  return { props: { data } };
}
