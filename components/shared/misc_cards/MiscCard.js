import { useContext, forwardRef } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Image from "next/image";
import LinkGroup from "../links_list/LinkGroup";
import LinksList from "../links_list/LinksList";
import LinkItem from "../links_list/LinkItem";

export default forwardRef(function MiscCard({ icon, data, href }, ref) {
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();

  const followLink = () => {
    router.push(href);
  };

  return (
    <div
      ref={ref}
      className="misc-card"
      style={{
        backgroundColor: themeState.background.secondary,
      }}
      onClick={followLink}
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
      <div className="misc-card__body">
        <div className="card-title">
          <span className="icon" style={{ fill: themeState.text.primary }}>
            {icon && icon}
          </span>
          <span className="text">{data.name}</span>
        </div>
        <LinkGroup title="Popular Games">
          <LinksList condition={data.games.length}>
            {data.games
              .filter((game, i) => i < 3)
              .map((game, i) => (
                <LinkItem
                  key={`game-${i}`}
                  href={`/game/${game.id}`}
                  name={game.name}
                  icon
                />
              ))}
          </LinksList>
        </LinkGroup>
      </div>
    </div>
  );
});
