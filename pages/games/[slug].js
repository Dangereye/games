import { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Image from "next/image";
import useStatus from "../../hooks/useStatus";
import Loader from "../../components/shared/Loader";
import ParentPlatforms from "../../components/shared/ParentPlatforms";
import Head from "next/head";
import DateComponent from "../../components/shared/DateComponent";
import GenresComponent from "../../components/shared/GenresComponent";

function GameDetails({ data, screenshots, trailers }) {
  const { appState, appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const validateStatus = useStatus();
  const game = appState.data;
  console.log("Details: ", data);
  console.log("Screenshots:", screenshots);
  console.log("Trailers: ", trailers);

  useEffect(() => {
    validateStatus(data);
  }, [data]);

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
              <h1 className="page-title">
                Network error{appState.error.status}.
              </h1>
              <p>{appState.error.message}.</p>
            </>
          ) : (
            <>
              <h1 className="display">{game.name}</h1>
              <div
                className="game-details__info-banner"
                style={{
                  color: themeState.text.secondary,
                  fill: themeState.text.secondary,
                }}
              >
                <DateComponent date={game.released} fullDate />
                <GenresComponent genres={game.genres} />
                <ParentPlatforms platforms={game.parent_platforms} />
              </div>
              <div
                className="game-details__description"
                style={{ color: themeState.text.tertiary }}
              >
                {game.description_raw}
              </div>
              <div className="game-details__trailer grid grid--multiple mt">
                {trailers.results.map((trailer) => (
                  <video width="100%" height="auto" controls>
                    <source src={trailer.data.max} type="video/mp4" />
                  </video>
                ))}
              </div>
              <div className="game-details__screenshots grid grid--multiple mt">
                {screenshots.results.map((pic) => (
                  <Image
                    src={pic.image}
                    width={pic.width}
                    height={pic.height}
                  />
                ))}
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

  let [data, screenshots, trailers] = await Promise.all([
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
  ]);
  data = await data.json();
  screenshots = await screenshots.json();
  trailers = await trailers.json();

  return {
    props: {
      data,
      screenshots,
      trailers,
    },
  };
}
