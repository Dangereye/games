function Stat({ figure, stat, condition }) {
  return (
    <>
      {condition && (
        <div className="stats__group">
          <div className="figure">{figure}</div>
          <div className="stat">{stat}</div>
        </div>
      )}
    </>
  );
}
export default Stat;
