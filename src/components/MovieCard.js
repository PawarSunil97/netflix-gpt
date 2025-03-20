import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterUrl }) => {
  if (posterUrl == null) return;
  return (
    <div className="w-48 pr-4">
      {/* Movie Poster */}
      <img
        src={`${IMG_CDN_URL}/${posterUrl}`}
        alt="Movie card"
       
      />
    </div>
  );
};

export default MovieCard;
