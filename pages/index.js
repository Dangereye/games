import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import GameCard from "../components/shared/GameCard";

function Home({ data }) {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  console.log("Data: ", data);
  const { results } = data;

  return (
    <section
      className="section"
      id="all-games"
      style={{ color: themeState.text.primary }}
    >
      <div className="container">
        {!data.results && (
          <>
            <h1>Network Error:</h1>
            <p>This service is temporarily unavailable.</p>
          </>
        )}
        {results && (
          <>
            <h1 className="page-title">{data.seo_h1}</h1>
            <div className="grid grid--multiple">
              {results.map((game) => (
                <GameCard game={game} key={game.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;

export async function getStaticProps() {
  let data = [];
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw Error("Service currently unavailable.");
    }
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { data } };
}
