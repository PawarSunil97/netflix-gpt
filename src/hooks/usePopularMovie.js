import { useEffect } from "react";
import { API_OPTION, GET_POPULAR_MOVIE_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../store/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movies.popularMovie);

  const getPopularMovie = async () => {
    const data = await fetch(GET_POPULAR_MOVIE_API, API_OPTION);
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    if (!popularMovie) {
      getPopularMovie();
    }
  }, []);
};

export default usePopularMovie;
