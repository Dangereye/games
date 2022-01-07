import { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Image from "next/image";
import useStatus from "../../hooks/useStatus";
import Loader from "../../components/shared/Loader";
import Head from "next/head";
import Link from "next/link";
import GameDetailsLinkGroup from "../../components/shared/game_details/GameDetailsLinkGroup";
import GameDetailsInfoBanner from "../../components/shared/game_details/GameDetailsInfoBannner";
import GameDetailsRatings from "../../components/shared/game_details/GameDetailsRatings";
import GameDetailsCompanies from "../../components/shared/game_details/GameDetailsCompanies";

function GameDetails({ initial, screenshots, trailers, achievements }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const validateStatus = useStatus();
  const game = appState.data;
  console.log("Data: ", initial);
  console.log("Screenshots: ", screenshots);
  console.log("Trailers", trailers);
  console.log("Achievements", achievements);

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
                  <div
                    className="game-details__description"
                    style={{ color: themeState.text.tertiary }}
                  >
                    {game.description_raw}
                  </div>
                  <GameDetailsRatings game={game} />
                  <GameDetailsCompanies game={game} />
                  <div className="game-details__specs grid grid--multiple mt">
                    <GameDetailsLinkGroup title="Platforms">
                      {game.platforms.map((x) => (
                        <Link
                          href={`/platforms/${x.platform.id}`}
                          key={x.platform.id}
                        >
                          <a className="game-details__links-group__link">
                            {x.platform.name}
                          </a>
                        </Link>
                      ))}
                    </GameDetailsLinkGroup>
                  </div>
                </div>
                <div className="grid--game-details__right">
                  {trailers.results.length > 0 && (
                    <div className="game-details__trailer">
                      <video
                        width="100%"
                        height="auto"
                        poster={screenshots.results[0].image}
                        controls
                      >
                        <source
                          src={trailers.results[0].data.max}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  )}
                  <div className="game-details__screenshots grid grid--multiple mt">
                    {screenshots.results.map((pic) => (
                      <div
                        className="game-details__screenshots__screenshot"
                        key={pic.id}
                      >
                        <Image
                          src={pic.image}
                          width={pic.width}
                          height={pic.height}
                          layout="responsive"
                          alt="Screenshot"
                          blurDataURL={pic.image}
                          placeholder="blur"
                        />
                      </div>
                    ))}
                  </div>
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

  let [initial, screenshots, trailers, achievements] = await Promise.all([
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
      `https://api.rawg.io/api/games/${params.slug}/achievements?key=${process.env.API_KEY}`,
      options
    ),
  ]);

  initial = await initial.json();
  screenshots = await screenshots.json();
  trailers = await trailers.json();
  achievements = await achievements.json();

  return {
    props: {
      initial,
      screenshots,
      trailers,
      achievements,
    },
  };
}
