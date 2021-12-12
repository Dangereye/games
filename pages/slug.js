import { useContext } from "react";
import Button from "../components/shared/Button";
import GameCard from "../components/shared/GameCard";
import { ThemeContext } from "../contexts/ThemeContext";

function GamesList({ data }) {
  const { themeState } = useContext(ThemeContext);
  console.log(data);
  return (
    <section
      className="section"
      id="game-list"
      style={{ color: themeState.text.primary }}
    >
      <div className="container">
        {!data.results && (
          <>
            <h1 className="page-title">Network error.</h1>
            <p>Service temporarily unavailable.</p>
          </>
        )}
        {data.results && (
          <>
            <h1 className="page-title">{data.seo_h1}</h1>
            <div className="grid grid--multiple">
              {data.results.map((game) => (
                <GameCard game={game} key={game.id} />
              ))}
            </div>
            <Button
              name="Load More"
              styles="btn--large btn--accent btn--center"
            />
          </>
        )}
      </div>
    </section>
  );
}

export default GamesList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { ordering, page_size, parent_platforms } = query;
  console.log("query: ", query);
  const parentPlatforms = parent_platforms
    ? `&parent_platforms=${parent_platforms}`
    : "";
  const order = ordering ? `&ordering=${ordering}` : "";
  const pageSize = page_size ? `&page_size=${page_size}` : "";
  const queryString = `${parentPlatforms}${order}${pageSize}`;

  console.log("Query String: ", queryString);
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}${queryString}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();
  return { props: { data } };
}
