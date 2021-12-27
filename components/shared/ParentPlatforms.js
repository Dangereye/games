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
} from "./PlatformSVGs";

function ParentPlatforms({ platforms }) {
  const router = useRouter();
  return (
    <div className="parent-platforms">
      <div className="parent-platforms__icons">
        {(router.route === "/games/[slug]"
          ? platforms
          : platforms.filter((p, index) => index < 3)
        ).map((p) => (
          <div className="parent-platforms__icons__icon" key={p.platform.slug}>
            {GetSVG(p.platform.slug)}
          </div>
        ))}
      </div>
      <div className="parent-platform__extras">
        {router.route !== "/games/[slug]" && platforms.length > 3 ? (
          <div className="parent-platforms__extras__extra">
            +{+platforms.length - 3}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

ParentPlatforms.defaultProps = {
  platforms: [],
};

export default ParentPlatforms;
