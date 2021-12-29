function MetacriticComponent({ score }) {
  let color;
  const colorMeta = (num) => {
    if (num < 50) color = "#fc4b37";
    if (num >= 50 && num < 70) color = "#e4880f";
    if (num >= 70) color = "#86c232";
    return;
  };

  if (score) {
    colorMeta(score);
  }

  return (
    <>
      {score && (
        <div
          className="metacritic"
          style={{
            color: color,
            borderColor: color,
          }}
        >
          {score}
        </div>
      )}
    </>
  );
}

export default MetacriticComponent;
