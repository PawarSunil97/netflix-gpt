import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_URL, API_OPTION } from "../utils/constant";
import { addNowPlayingMovie } from "../store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(API_URL, API_OPTION);
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
