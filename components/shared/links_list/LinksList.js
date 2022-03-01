function LinksList({ condition, classes, styles, children }) {
  return (
    <>
      {condition ? (
        <ul className={`links-list ${classes}`} style={styles}>
          {children}
        </ul>
      ) : (
        "N/A"
      )}
    </>
  );
}

LinksList.defaultProps = {
  condition: false,
  classes: "fd-c",
  styles: {},
};

export default LinksList;
