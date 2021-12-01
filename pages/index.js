import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../contexts/ThemeContext";
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
} from "../components/shared/svg/Platforms";

function Home({ data }) {
  const { state, dispatch } = useContext(ThemeContext);
  // const { results } = data;
  // console.log(results);
  return (
    <section className="section" id="all-games">
      <div className="container">
        <h1 className="page-title" style={{ color: state.text.primary }}>
          Games
        </h1>
        <div className="grid grid--multiple">
          <_3do />
          <Amiga />
          <Android />
          <Atari />
          <Ios />
          <Linux />
          <Mac />
          <NeoGeo />
          <Nintendo />
          <Pc />
          <Playstation />
          <Sega />
          <Web />
          <Xbox />
          {/* {results.map((game) => (
            <div className="game game__card" key={game.slug}>
              <div className="game__image">
                <Image
                  src={game.background_image}
                  width="150"
                  height="100"
                  layout="responsive"
                  alt={game.name}
                  blurDataURL={game.background_image}
                  placeholder="blur"
                />
              </div>
              <div className="game__text">
                <div className="game__platforms">
                  {game.parent_platforms.map((item) => (
                    <Image
                      src={`/svg/platforms/${item.platform.slug}.svg`}
                      width="200"
                      height="200

                      "
                      alt={item.platform.name}
                      title={item.platform.slug}
                    />
                  ))}
                </div>
                <div>{game.name}</div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Home;

// export async function getStaticProps() {
//   const response = await fetch(
//     `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
//     {
//       method: "GET",
//       mode: "no-cors",
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   const data = await response.json();

//   return { props: { data } };
// }
