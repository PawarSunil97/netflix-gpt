import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("movies",movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 ml-12 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowplayingMovie} />
        <MovieList title="Popular" movies={movies.popularMovie} />
        <MovieList title="Up Comming" movies={movies.UpcommingMovie} />
        <MovieList title="Top Rated" movies={movies.topRatedMovie} />
      </div>
    </div>
  );
};

export default SecondContainer;
