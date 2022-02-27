function Button({ name, classes, styles, func }) {
  return (
    <button className={`btn ${classes}`} style={styles} onClick={func}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: "Name",
  classes: "btn--accent btn--small",
  styles: {},
  func: () => {
    return;
  },
};

export default Button;
