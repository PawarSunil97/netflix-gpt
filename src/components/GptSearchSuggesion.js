import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggesion = () => {
  const gpt = useSelector((store) => store.gpt);

  // Ensure gpt exists and has valid movie data
  if (!gpt.movieName || !gpt.moviesResults) {
    return <div>Loading...</div>; // Show a fallback UI
  }

  const { movieName, moviesResults } = gpt;
  return (
    <div className="relative bg-opacity-70 bg-black text-white p-4">
      <div className="md:-mt-28 ml-12 relative z-20">
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggesion;
