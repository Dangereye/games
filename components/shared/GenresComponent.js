function GenresComponent({ genres }) {
  return (
    <div className="game-details__info-banner__genres">
      {genres.map((genre) => (
        <span>{genre.name}</span>
      ))}
    </div>
  );
}

export default GenresComponent;
