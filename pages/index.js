import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import GameCard from "../components/shared/GameCard";

function Home({ data }) {
  const { state, dispatch } = useContext(ThemeContext);
  const { results } = data;

  return (
    <section
      className="section"
      id="all-games"
      style={{ color: state.text.primary }}
    >
      <div className="container">
        <h1 className="page-title">Games</h1>
        {!data.length && <p>Service currently unavailable.</p>}
        {results && (
          <div className="grid grid--multiple">
            {results.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </div>
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
