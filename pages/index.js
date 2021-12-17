import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AppContext } from "../contexts/AppContext";
import useStatus from "../hooks/useStatus";
import useClientFetch from "../hooks/useClientFetch";
import Head from "next/head";
import GameCard from "../components/shared/GameCard";
import Button from "../components/shared/Button";
import Loader from "../components/shared/Loader";

function Home({ data, status }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const validateStatus = useStatus();
  const addGames = useClientFetch();
  // console.log("Index appState: ", appState);

  const fetchMore = () => {
    addGames(appState.data.next);
  };

  useEffect(() => {
    validateStatus(data, status);
  }, [data]);

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
              <h1 className="page-title">
                Network error{appState.error.status}.
              </h1>
              <p>{appState.error.message}.</p>
            </>
          ) : (
            <>
              <h1 className="page-title">{appState.data.seo_h1}</h1>
              <div className="grid grid--multiple">
                {appState.data.results.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))}
              </div>
              {appState.isLoadingMore && <Loader />}
              {appState.data.next && (
                <Button
                  name="Load More"
                  styles="btn--large btn--accent btn--center"
                  func={fetchMore}
                />
              )}
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
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=40`,
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
