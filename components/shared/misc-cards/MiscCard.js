import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Image from "next/image";

function MiscCard({ title, subtitle, data }) {
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();

  const gameLink = (id) => {
    router.push(`/game/${id}`);
  };

  return (
    <div
      className="misc-card"
      style={{
        backgroundColor: themeState.background.secondary,
      }}
    >
      <div className="misc-card__image">
        <Image
          src={data.image_background}
          width="250"
          height="150"
          alt={data.name}
          blurDataURL={data.image_background}
          placeholder="blur"
          layout="responsive"
        />
      </div>
      <header>
        <div className="misc-card__title">{data.name}</div>
      </header>
      <div className="misc-card__body">
        <h4 className="title" style={{ color: themeState.text.tertiary }}>
          {subtitle}
        </h4>
        <ul className="misc-card__games-list">
          {data.games
            .filter((game, index) => index < 3)
            .map((game, index) => (
              <li
                className="game"
                key={`${title}-${game.slug}`}
                style={{ color: themeState.text.primary }}
              >
                <span onClick={() => gameLink(game.id)}>{game.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default MiscCard;
