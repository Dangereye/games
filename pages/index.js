import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../contexts/ThemeContext";

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
          <Image
            src="/svg/platforms/android.svg"
            width="300"
            height="300"
            alt="Android"
          />
          <Image
            src="/svg/platforms/neo-geo.svg"
            width="300"
            height="300"
            alt="Neo Geo"
          />
          <Image
            src="/svg/platforms/3do.svg"
            width="300"
            height="300"
            alt="3DO"
          />
          <Image
            src="/svg/platforms/amiga.svg"
            width="300"
            height="300"
            alt="Amiga"
          />
          <Image
            src="/svg/platforms/sega.svg"
            width="300"
            height="300"
            alt="Sega"
          />
          <Image
            src="/svg/platforms/atari.svg"
            width="300"
            height="300"
            alt="Atari"
          />
          <Image
            src="/svg/platforms/ios.svg"
            width="300"
            height="300"
            alt="IOS"
          />
          <Image
            src="/svg/platforms/linux.svg"
            width="300"
            height="300"
            alt="Linux"
          />
          <Image
            src="/svg/platforms/mac.svg"
            width="300"
            height="300"
            alt="Mac"
          />
          <Image
            src="/svg/platforms/nintendo.svg"
            width="300"
            height="300"
            alt="Nintendo"
          />
          <Image
            src="/svg/platforms/pc.svg"
            width="300"
            height="300"
            alt="PC"
          />
          <Image
            src="/svg/platforms/playstation.svg"
            width="300"
            height="300"
            alt="Playstation"
          />
          <Image
            src="/svg/platforms/web.svg"
            width="300"
            height="300"
            alt="Web"
          />
          <Image
            src="/svg/platforms/xbox.svg"
            width="300"
            height="300"
            alt="Xbox"
          />
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
