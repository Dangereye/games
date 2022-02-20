function FormatNumber({ num }) {
  return <span className="format-number">{num.toLocaleString("en-UK")}</span>;
}
export default FormatNumber;
