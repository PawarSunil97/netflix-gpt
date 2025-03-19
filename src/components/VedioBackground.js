import React from "react";
import { useSelector } from "react-redux";
import useTrailerVedio from "../hooks/useTrailerVedio";

const VedioBackground = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies.trailerVedio);
  useTrailerVedio(movieId)
  return (
    <div className="w-full">
      <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${trailerVedio?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVedio?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VedioBackground;
