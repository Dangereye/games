import { useContext, forwardRef } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import LinkGroup from '../links_list/LinkGroup';
import LinksList from '../links_list/LinksList';
import LinkItem from '../links_list/LinkItem';

export default forwardRef(function MiscCard({ icon, data, href }, ref) {
  const { themeState } = useContext(ThemeContext);

  return (
    <div
      ref={ref}
      className='misc-card'
      style={{
        color: themeState.text.primary,
        backgroundColor: themeState.background.secondary,
      }}
    >
      <div className='game-card__image'>
        <Image
          src={
            data.image_background
              ? data.image_background
              : '/images/missing-image-game-card.jpg'
          }
          layout='fill'
          sizes='17vw'
          alt={data.name ? data.name : 'Unknown image'}
        />
      </div>
      <div className='game-card__body'>
        <div className='card-title'>
          {icon && (
            <span className='icon' style={{ fill: themeState.text.primary }}>
              {icon}
            </span>
          )}
          <Link href={href}>
            <a className='text'>{data.name}</a>
          </Link>
        </div>
        <div className='popular-games'>
          <LinkGroup title='Popular'>
            <LinksList condition={data.games?.length > 0}>
              {data.games
                ?.filter((game, i) => i < 3)
                .map((game, i) => (
                  <LinkItem
                    key={`game-${i}`}
                    href={`/game/${game.id}`}
                    name={game.name}
                  />
                ))}
            </LinksList>
          </LinkGroup>
        </div>
      </div>
    </div>
  );
});
