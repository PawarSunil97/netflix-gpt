import React from "react";
import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowplayingMovie);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VedioTitle Movietitle={original_title} MovieOverview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
