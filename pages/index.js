import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import GameCard from "../components/shared/GameCard";

function Home({ data }) {
  const { state, dispatch } = useContext(ThemeContext);
  const { results } = data;
  console.log(results);

  return (
    <section className="section" id="all-games">
      <div className="container">
        <h1 className="page-title" style={{ color: state.text.primary }}>
          Games
        </h1>
        <div className="grid grid--multiple">
          {results.map((game) => (
            <GameCard game={game} key={game.id} />
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
