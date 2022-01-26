import { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import useStatus from "../../hooks/useStatus";
import Loader from "../../components/shared/Loader";
import Head from "next/head";
import GameDetailsInfoBanner from "../../components/shared/game_details/GameDetailsInfoBannner";
import GameDetailsRatings from "../../components/shared/game_details/GameDetailsRatings";
import GameDetailsSpecs from "../../components/shared/game_details/GameDetailsSpecs";
import GameDetailsAdditional from "../../components/shared/game_details/GameDetailsAdditional";
import GameDetailsTrailer from "../../components/shared/game_details/GameDetailsTrailer";
import GameDetailsScreenshots from "../../components/shared/game_details/GameDetailsScreenshots";

function GameDetails({
  initial,
  screenshots,
  trailers,
  series,
  achievements,
  stores,
}) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const validateStatus = useStatus();
  const game = appState.data;
  console.log("Data: ", initial);
  console.log("Screenshots: ", screenshots);
  console.log("Trailers", trailers);
  console.log("Series", series);
  console.log("Achievements", achievements);
  console.log("Stores", stores);

  useEffect(() => {
    validateStatus(initial);
  }, [initial]);

  return (
    <>
      <Head>
        <title>Games | {game.name}</title>
        <meta name="author" content="Craig Puxty" />
        <meta
          name="description"
          content="Video game database and discovery service - powered by RAWG.IO"
        />
      </Head>
      <section
        className="section game-details"
        style={{ color: themeState.text.primary }}
      >
        <div className="container">
          {appState.isLoading ? (
            <Loader />
          ) : appState.error.isError ? (
            <>
              <h1 className="page-title">Network error.</h1>
              <p>{appState.error.message}.</p>
            </>
          ) : (
            <>
              <div className="grid grid--game-details">
                <div className="grid--game-details__left">
                  <h1 className="display">{game.name}</h1>
                  <GameDetailsInfoBanner game={game} />
                  <GameDetailsTrailer trailers={trailers.results} />
                  <div
                    className="game-details__description"
                    style={{ color: themeState.text.tertiary }}
                  >
                    {game.description_raw}
                  </div>
                  <GameDetailsRatings game={game} />
                  <GameDetailsSpecs game={game} />
                </div>
                <div className="grid--game-details__right">
                  <GameDetailsScreenshots screenshots={screenshots.results} />
                  <GameDetailsAdditional game={game} series={series.results} />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default GameDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  let [initial, screenshots, trailers, series, achievements, stores] =
    await Promise.all([
      fetch(
        `https://api.rawg.io/api/games/${params.slug}?key=${process.env.API_KEY}`,
        options
      ),
      fetch(
        `https://api.rawg.io/api/games/${params.slug}/screenshots?key=${process.env.API_KEY}`,
        options
      ),
      fetch(
        `https://api.rawg.io/api/games/${params.slug}/movies?key=${process.env.API_KEY}`,
        options
      ),
      fetch(
        `https://api.rawg.io/api/games/${params.slug}/game-series?key=${process.env.API_KEY}`,
        options
      ),
      fetch(
        `https://api.rawg.io/api/games/${params.slug}/achievements?key=${process.env.API_KEY}`,
        options
      ),
      fetch(
        `https://api.rawg.io/api/games/${params.slug}/stores?key=${process.env.API_KEY}`,
        options
      ),
    ]);

  initial = await initial.json();
  screenshots = await screenshots.json();
  trailers = await trailers.json();
  series = await series.json();
  achievements = await achievements.json();
  stores = await stores.json();

  return {
    props: {
      initial,
      screenshots,
      trailers,
      series,
      achievements,
      stores,
    },
  };
}