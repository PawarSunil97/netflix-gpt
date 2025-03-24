import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovie } from "../store/movieSlice";
import { GET_UPCOMMING_MOVIE, API_OPTION } from "../utils/constant";

const useUpcommingMovie = () => {
  const dispatch = useDispatch();
  const upComming = useSelector((store) => store.movies.UpcommingMovie);
  const getNowPlayingMovie = async () => {
    const data = await fetch(GET_UPCOMMING_MOVIE, API_OPTION);
    const json = await data.json();
    dispatch(addUpcommingMovie(json.results));
  };

  useEffect(() => {
    if (!upComming) {
      getNowPlayingMovie();
    }
  }, []);
};

export default useUpcommingMovie;
