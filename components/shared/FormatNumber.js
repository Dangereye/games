function FormatNumber({ num, styles }) {
  return (
    <span className="format-number" style={styles}>
      {num.toLocaleString("en-UK")}
    </span>
  );
}

FormatNumber.defaultProps = {
  color: "inherit",
};
export default FormatNumber;
