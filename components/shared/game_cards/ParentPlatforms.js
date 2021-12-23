import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useRouter } from "next/router";
import {
  GetSVG,
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
} from "../PlatformSVGs";

function ParentPlatforms({ platforms }) {
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <div
      className="game-card__platform-icons"
      style={{ fill: themeState.text.secondary }}
    >
      {(router.route === "/games/[slug]"
        ? platforms
        : platforms.filter((p, index) => index < 3)
      ).map((p) => (
        <div className="game-card__platform" key={p.platform.slug}>
          {GetSVG(p.platform.slug)}
        </div>
      ))}
      {router.route !== "/games/[slug]" && platforms.length > 3 ? (
        <div className="game-card__platform">+{+platforms.length - 3}</div>
      ) : (
        ""
      )}
    </div>
  );
}

ParentPlatforms.defaultProps = {
  platforms: [],
};

export default ParentPlatforms;
