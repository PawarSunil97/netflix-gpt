
import { useEffect } from 'react';
import { API_OPTION, GET_POPULAR_MOVIE_API } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../store/movieSlice';

const usePopularMovie = () => {

const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(GET_POPULAR_MOVIE_API,API_OPTION);
    const json = await data.json();
    console.log("popular",json)
       dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovie