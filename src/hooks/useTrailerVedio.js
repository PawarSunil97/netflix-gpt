import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVedio } from "../store/movieSlice";

const useTrailerVedio = (movieId) => {
  const dispatch = useDispatch();

  const getMoviTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION
    );
    const json = await data.json();
    console.log(json.results)
    const filterData = json.results.find((vedio) => (vedio.type = "Trailer"));
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    getMoviTrailer();
  }, []);
};

export default useTrailerVedio;
