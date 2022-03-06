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
} from "../shared/svg_functions/PlatformSVGs";

function ParentPlatforms({ platforms, limit }) {
  return (
    <div className="parent-platforms">
      <div className="parent-platforms__icons">
        {(limit ? platforms.filter((p, index) => index < 3) : platforms).map(
          (p) => (
            <div
              className="parent-platforms__icons__icon"
              key={p.platform.slug}
              title={p.platform.name}
            >
              {GetSVG(p.platform.slug)}
            </div>
          )
        )}
      </div>
      <div className="parent-platform__extras">
        {limit && platforms.length > 3 ? (
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
