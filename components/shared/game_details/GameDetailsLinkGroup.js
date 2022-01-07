function GameDetailsGroup({ title, styles, children }) {
  return (
    <div className={`game-details__links-group ${styles}`}>
      <h3>{title}</h3>
      <div className="game-details__links-group__links">{children}</div>
    </div>
  );
}

GameDetailsGroup.defaultProps = { title: "Unknown", styles: "" };

export default GameDetailsGroup;
