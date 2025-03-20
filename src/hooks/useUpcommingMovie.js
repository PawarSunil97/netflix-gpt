import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcommingMovie } from '../store/movieSlice';
import {GET_UPCOMMING_MOVIE, API_OPTION } from '../utils/constant';

const useUpcommingMovie = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovie = async () => {
      const data = await fetch(GET_UPCOMMING_MOVIE, API_OPTION);
      const json = await data.json();
         dispatch(addUpcommingMovie(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovie();
    }, []);
  };
  


export default useUpcommingMovie