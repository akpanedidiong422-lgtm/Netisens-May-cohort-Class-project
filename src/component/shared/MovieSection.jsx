import { useState } from "react";
import MovieCard from "./MovieCard";

function MovieSection({ title, movies }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <section>
      <div className="section-header">
        <h2>{title}</h2>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>

      <div className={showAll ? "movie-grid" : "movie-container"}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;