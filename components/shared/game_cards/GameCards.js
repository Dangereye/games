import { useState, useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import useClientFetch from '../../../hooks/useClientFetch';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import Loader from '../Loader';
import GameCard from './GameCard';
import Button from '../buttons/Button';

function GameCards({ condition, title, subtitle, list, limited }) {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  const [limit, setLimit] = useState(limited);

  const addContent = useClientFetch();
  const { setElement } = useInfiniteScroll();

  const data = list ? list : appState.data.results;

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  const toggleAmount = () => {
    setLimit(!limit);
  };

  return (
    <>
      {condition && (
        <section style={{ color: themeState.text.primary }}>
          <h2 className='section-title hidden'>{title}</h2>
          {subtitle && (
            <h3
              className='section-subtitle'
              style={{ color: themeState.text.tertiary }}
            >
              {subtitle}
            </h3>
          )}
          <div className='grid grid--cards'>
            {(limit ? data.slice(0, 5) : data)
              .filter((game) => game && typeof game.id !== 'undefined')
              .map((game, i, arr) => (
                <GameCard
                  ref={i === arr.length - 1 ? setElement : null}
                  game={game}
                  key={game.id}
                />
              ))}
          </div>

          {appState.isLoadingMore && <Loader />}
          {appState.data.next &&
            !appState.isLoadingMore &&
            !limit &&
            !appState.infinite_scroll && (
              <Button
                name='Load More'
                classes='btn--large btn--primary btn--center mt-4'
                func={fetchMore}
              />
            )}
          {data.length > 5 && limited && (
            <Button
              name={limit ? 'Show More' : 'Show Less'}
              classes='btn--more'
              func={toggleAmount}
            />
          )}
        </section>
      )}
    </>
  );
}

GameCards.defaultProps = {
  condition: true,
  title: 'Section Title',
  subtitle: false,
  list: false,
  limited: false,
};

export default GameCards;
