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
import fetchRawgData from '../../utils/fetchRawgData';

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
  const { params, req } = context;
  const slug = params.slug;

  const [
    initial,
    screenshots,
    trailers,
    series,
    achievements,
    stores,
    additions,
    parent,
  ] = await Promise.all([
    fetchRawgData({}, req, `games/${slug}`),
    fetchRawgData({ page_size: 20 }, req, `games/${slug}/screenshots`),
    fetchRawgData({}, req, `games/${slug}/movies`),
    fetchRawgData({ page_size: 40 }, req, `games/${slug}/game-series`),
    fetchRawgData({ page_size: 40 }, req, `games/${slug}/achievements`),
    fetchRawgData({}, req, `games/${slug}/stores`),
    fetchRawgData({ page_size: 40 }, req, `games/${slug}/additions`),
    fetchRawgData({ page_size: 40 }, req, `games/${slug}/parent-games`),
  ]);

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
