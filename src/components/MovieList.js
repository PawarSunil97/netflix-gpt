import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
        <h1 className="text-white text-xl md:text-2xl font-semibold p-2">
          {title}
        </h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">  
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterUrl={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
