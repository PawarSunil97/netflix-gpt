import React, { use } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcommingMovie from "../hooks/useUpcommingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovie();
  useUpcommingMovie();
  useTopRatedMovie();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
      {/* 
        - MainContainer
          -VedioBackground
          -VedioTitle
        -SecondContainer
         -movieList  
           -number of cards

      */}
    </div>
  );
};

export default Browse;
