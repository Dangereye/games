function Button({ name, styles, func }) {
  return (
    <button className={`btn ${styles}`} onClick={func}>
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: "Name",
  styles: "btn--accent btn--small",
  func: () => {
    return;
  },
};

export default Button;
