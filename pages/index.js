import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import GameCard from "../components/shared/GameCard";
import Button from "../components/shared/Button";

function Home({ data }) {
  const { themeState } = useContext(ThemeContext);
  // console.log("Data: ", data);
  const { results } = data;

  return (
    <section
      className="section"
      id="game-list"
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
            <Button name="Load More" styles="btn--large" />
          </>
        )}
      </div>
    </section>
  );
}

export default Home;

export async function getServerSideProps() {
  let data = [];
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=10`,
      {
        method: "GET",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.statusText === "ok") {
      throw Error("This service is temporarily unavailable.");
    }

    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { data } };
}
