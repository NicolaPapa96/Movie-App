export default function MovieDetails({ selectedMovie }) {
  return (
    <div className="movie-details">
      <img src={selectedMovie.Poster} alt="Poster" className="movie-img" />
      <section>
        <h2>{selectedMovie.Title}</h2>
        <h4>
          {selectedMovie.Rated}, {selectedMovie.Year}, {selectedMovie.Runtime}
          <br />
          Genre: <span className="italic">{selectedMovie.Genre}</span>
        </h4>
        <h4>
          IMDb rating:{" "}
          <span className="italic">{selectedMovie.imdbRating}</span>
        </h4>
        <h4>
          Director: <span className="italic">{selectedMovie.Director}</span>
        </h4>
        <h4>
          Cast: <span className="italic">{selectedMovie.Actors}</span>
        </h4>
        <h3>Plot</h3>
        <p>{selectedMovie.Plot}</p>
      </section>
    </div>
  );
}
