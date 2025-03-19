import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import useUpdateState from '../../hooks/useUpdateState';
import Loader from '../../components/shared/Loader';
import ErrorMessage from '../../components/shared/ErrorMessage';
import Head from 'next/head';
import InfoBanner from '../../components/game_details/header/InfoBannner';
import Trailer from '../../components/game_details/header/Trailer';
import Description from '../../components/game_details/header/Description';
import Team from '../../components/game_details/header/Team';
import ESRBRating from '../../components/game_details/header/ESRBRating';
import Screenshots from '../../components/game_details/header/Screenshots';
import Stats from '../../components/game_details/stats/Stats';
import Stores from '../../components/game_details/Stores';
import Specification from '../../components/game_details/Specification';
import GameCards from '../../components/shared/game_cards/GameCards';
import Achievements from '../../components/game_details/Achievements';

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
  const {} = useUpdateState(initial);
  const game = appState.data;

  return (
    <>
      <Head>
        <title>Games | {game.name}</title>
        <meta name='author' content='Craig Puxty' />
        <meta
          name='description'
          content='Video game database and discovery service - powered by RAWG.IO'
        />
      </Head>
      {appState.isLoading ? (
        <Loader />
      ) : appState.error.isError ? (
        <ErrorMessage />
      ) : (
        <>
          {!appState.modal.isOpen && (
            <>
              <header
                className='game-details grid'
                style={{ color: themeState.text.primary }}
              >
                {/* Left */}
                <div>
                  <h1 className='display-title'>{game.name}</h1>
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

              <GameCards
                condition={additions.count > 0}
                title="Editions, DLC's and  apps"
                subtitle='Game additions'
                list={additions.results}
                limited
              />

              <GameCards
                condition={series.count > 0}
                title='Games in the series'
                subtitle='Game series'
                list={series.results}
                limited
              />

              <GameCards
                condition={parent.count > 0}
                title='Parent game'
                subtitle='Addition to'
                list={parent.results}
                limited
              />
              <Achievements achievements={achievements} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default GameDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
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
