import React, { useEffect } from 'react'
import { API_OPTION, GET_TOP_RATED_MOVIE } from '../utils/constant';
import { addTopRatedgMovie } from '../store/movieSlice';
import { useDispatch } from 'react-redux';

const useTopRatedMovie = () => {
    const dispatch=useDispatch()
   const getTopRatedMovie = async () => {
      const data = await fetch(GET_TOP_RATED_MOVIE,API_OPTION);
      const json = await data.json();
      console.log("popular",json)
         dispatch(addTopRatedgMovie(json.results));
    };
  
    useEffect(() => {
        getTopRatedMovie();
    }, []);
}

export default useTopRatedMovie