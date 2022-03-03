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
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          <header
            className="game-details grid"
            style={{ color: themeState.text.primary }}
          >
            {/* Left */}
            <div>
              <h1 className="display-title">{game.name}</h1>
              <InfoBanner game={game} />
              <Trailer trailers={trailers.results} />
              <Description description={game.description_raw} />
              <Team game={game} />
              <ESRBRating esrb={game.esrb_rating} />
            </div>
            {/* Right */}
            <div>
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
            title="Game DLC's and other editions"
            subtitle="Game Additions"
            list={additions.results}
          />
          {/* Game Series */}
          <CardsSection
            condition={series.count > 0}
            title="Other games in the series"
            subtitle="Game series"
            list={series.results}
          />

          {/* Parent Game */}
          <CardsSection
            condition={parent.count > 0}
            title="Addition to"
            subtitle="Addition to"
            list={parent.results}
          />
          <Achievements achievements={achievements} />
        </>
      )}
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
