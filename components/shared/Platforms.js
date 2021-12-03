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
} from "./PlatformSVGs";

function PlatformComponent({ platforms }) {
  return (
    <div className="game-card__platforms">
      {platforms.map((p) => {
        <div className="platform"></div>;
        switch (p.platform.slug) {
          case "3do":
            return <_3do key={p.platform.slug} />;
          case "amiga":
            return <Amiga key={p.platform.slug} />;
          case "android":
            return <Android key={p.platform.slug} />;
          case "atari":
            return <Atari key={p.platform.slug} />;
          case "ios":
            return <Ios key={p.platform.slug} />;
          case "linux":
            return <Linux key={p.platform.slug} />;
          case "mac":
            return <Mac key={p.platform.slug} />;
          case "neo-geo":
            return <NeoGeo key={p.platform.slug} />;
          case "nintendo":
            return <Nintendo key={p.platform.slug} />;
          case "pc":
            return <Pc key={p.platform.slug} />;
          case "playstation":
            return <Playstation key={p.platform.slug} />;
          case "sega":
            return <Sega key={p.platform.slug} />;
          case "web":
            return <Web key={p.platform.slug} />;
          case "xbox":
            return <Xbox key={p.platform.slug} />;
          default:
            return;
        }
      })}
    </div>
  );
}

PlatformComponent.defaultProps = {
  games: [],
};

export default PlatformComponent;
