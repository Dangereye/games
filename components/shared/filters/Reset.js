function Reset({ condition, func }) {
  return (
    <>
      {condition && (
        <div className="filters__option" onClick={func}>
          All
        </div>
      )}
    </>
  );
}

Reset.defaultProps = {
  condition: false,
  func: () => {
    return;
  },
};

export default Reset;
