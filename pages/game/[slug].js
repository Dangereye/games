import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import useStatus from "../../hooks/useStatus";
import Loader from "../../components/shared/Loader";
import Head from "next/head";
import InfoBanner from "../../components/shared/game_details/header/InfoBannner";
import Trailer from "../../components/shared/game_details/header/Trailer";
import Description from "../../components/shared/game_details/header/Description";
import Team from "../../components/shared/game_details/header/Team";
import ESRBRating from "../../components/shared/game_details/header/ESRBRating";
import Screenshots from "../../components/shared/game_details/header/Screenshots";
import Stats from "../../components/shared/game_details/stats/Stats";
import Stores from "../../components/shared/game_details/Stores";
import Specification from "../../components/shared/game_details/Specification";
import CardsSection from "../../components/shared/game_details/CardsSection";
import GameCard from "../../components/shared/game_cards/GameCard";
import Achievements from "../../components/shared/game_details/Achievements";

function GameDetails({
  initial,
  screenshots,
  trailers,
  series,
  achievements,
  stores,
  additions,
  parent,
}) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const {} = useStatus(initial);
  const game = appState.data;
  console.log("Data: ", initial);
  console.log("Screenshots: ", screenshots);
  console.log("Additions: ", additions);
  console.log("Trailers", trailers);
  console.log("Series", series);
  console.log("Achievements", achievements);
  console.log("Stores", stores);
  console.log("Parent", parent);

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
              <header>
                <div className="grid--game-details__left">
                  <h1 className="display">{game.name}</h1>
                  <InfoBanner game={game} />
                  <Trailer trailers={trailers.results} />
                  <Description description={game.description_raw} />
                  <Team game={game} />
                  <ESRBRating esrb={game.esrb_rating} />
                </div>
                <div className="grid--game-details__right">
                  <Screenshots screenshots={screenshots.results} />
                </div>
              </header>
              <Stats
                game={game}
                series={series}
                additions={additions}
                achievements={achievements}
              />
              <Specification game={game} />
              <Stores stores={stores} />

              {/* Game Additions */}
              <CardsSection
                condition={additions.count > 0}
                title="Game Additions"
              >
                {additions.results.map((game, index) => (
                  <GameCard key={`edition-${index}`} game={game} />
                ))}
              </CardsSection>

              {/* Game Series */}
              <CardsSection condition={series.count > 0} title="Game Series">
                {series.results.map((game, index) => (
                  <GameCard key={`series-${index}`} game={game} />
                ))}
              </CardsSection>

              {/* Parent Game */}
              <CardsSection condition={parent.count > 0} title="Addition to">
                {parent.results.map((game, index) => (
                  <GameCard key={`parent-${index}`} game={game} />
                ))}
              </CardsSection>
              <Achievements achievements={achievements} />
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

  let [
    initial,
    screenshots,
    trailers,
    series,
    achievements,
    stores,
    additions,
    parent,
  ] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games/${params.slug}?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/screenshots?key=${process.env.API_KEY}&page_size=20`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/movies?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/game-series?key=${process.env.API_KEY}&page_size=40`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/achievements?key=${process.env.API_KEY}&page_size=40`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/stores?key=${process.env.API_KEY}`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/additions?key=${process.env.API_KEY}&page_size=40`,
      options
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.slug}/parent-games?key=${process.env.API_KEY}&page_size=40`,
      options
    ),
  ]);

  initial = await initial.json();
  screenshots = await screenshots.json();
  trailers = await trailers.json();
  series = await series.json();
  achievements = await achievements.json();
  stores = await stores.json();
  additions = await additions.json();
  parent = await parent.json();

  return {
    props: {
      initial,
      screenshots,
      trailers,
      series,
      achievements,
      stores,
      additions,
      parent,
    },
  };
}
