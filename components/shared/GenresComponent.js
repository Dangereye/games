function GenresComponent({ genres }) {
  return (
    <div className="info-banner__genres">
      {genres.map((genre, index) => (
        <span key={`genre-${genre}-${index}`}>{genre.name}</span>
      ))}
    </div>
  );
}

export default GenresComponent;
