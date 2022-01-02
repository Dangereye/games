function GameDetailsGroup({ title, children }) {
  return (
    <div className="game-details__links-group">
      <h3>{title}</h3>
      <div className="game-details__links-group__links">{children}</div>
    </div>
  );
}

export default GameDetailsGroup;
