import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import {
  _3do,
  Amiga,
  Android,
  Atari,
  Ios,
  Linux,
  Mac,
  NeoGeo,
  Nintendo,
  Pc,
  Playstation,
  Sega,
  Web,
  Xbox,
} from ".././PlatformSVGs";

const GetSVG = (name) => {
  if (name === "3do") return <_3do />;
  if (name === "amiga") return <Amiga />;
  if (name === "android") return <Android />;
  if (name === "atari") return <Atari />;
  if (name === "ios") return <Ios />;
  if (name === "linux") return <Linux />;
  if (name === "mac") return <Mac />;
  if (name === "neo-geo") return <NeoGeo />;
  if (name === "nintendo") return <Nintendo />;
  if (name === "pc") return <Pc />;
  if (name === "playstation") return <Playstation />;
  if (name === "sega") return <Sega />;
  if (name === "web") return <Web />;
  if (name === "xbox") return <Xbox />;
  return;
};

function GameCardPlatforms({ platforms }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="game-card__platform-icons"
      style={{ fill: themeState.text.secondary }}
    >
      {platforms
        .filter((p, index) => index < 3)
        .map((p) => (
          <div className="game-card__platform" key={p.platform.slug}>
            {GetSVG(p.platform.slug)}
          </div>
        ))}
      {platforms.length > 3 ? (
        <div className="game-card__platform">+{+platforms.length - 3}</div>
      ) : (
        ""
      )}
    </div>
  );
}

GameCardPlatforms.defaultProps = {
  platforms: [],
};

export default GameCardPlatforms;
