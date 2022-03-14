function Reset({ condition, func }) {
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      func();
    }
  };

  return (
    <>
      {condition && (
        <div
          tabIndex="0"
          className="filters__option"
          onClick={func}
          onKeyPress={handleKeyPress}
        >
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
