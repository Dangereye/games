function GameCardDate({ date }) {
  const options = { year: "numeric", month: "short" };

  const d = new Date(date);

  return (
    <>
      <div className="game-card__date">
        {date ? d.toLocaleDateString("en-GB", options) : "TBA"}
      </div>
    </>
  );
}

export default GameCardDate;
