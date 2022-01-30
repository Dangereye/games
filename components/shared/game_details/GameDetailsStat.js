function GameDetailsStat({ figure, stat }) {
  return (
    <div className="stats-group">
      <div className="display">{figure}</div>
      <div className="stat">{stat}</div>
    </div>
  );
}
export default GameDetailsStat;
