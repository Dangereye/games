function DateComponent({ date, fullDate }) {
  const short = { year: "numeric", month: "short" };
  const full = { year: "numeric", month: "long", day: "numeric" };

  const d = new Date(date);

  return (
    <>
      <div className="game-card__date">
        {date ? d.toLocaleDateString("en-GB", fullDate ? full : short) : "TBA"}
      </div>
    </>
  );
}
DateComponent.defaultProps = {
  fullDate: false,
};
export default DateComponent;
