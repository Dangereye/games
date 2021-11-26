import Image from "next/image";

function Home({ data }) {
  const { results } = data;
  console.log(results);
  return (
    <section className="section" id="all-games">
      <div className="container">
        <h2 className="page-title">Games</h2>
        <div className="grid grid--multiple">
          {results.map((game) => (
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
                      width="20"
                      height="20
                      "
                      alt={item.platform.name}
                      title={item.platform.slug}
                    />
                  ))}
                </div>
                <div>{game.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

export async function getStaticProps() {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  return { props: { data } };
}
