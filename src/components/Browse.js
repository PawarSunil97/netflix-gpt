import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useUpcommingMovie from '../hooks/useUpcommingMovie'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
const Browse = () => {
const data =useNowPlayingMovies();
usePopularMovie()
useUpcommingMovie()
useTopRatedMovie()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
      {/* 
        - MainContainer
          -VedioBackground
          -VedioTitle
        -SecondContainer
         -movieList  
           -number of cards

      */}
    </div>
  )
}

export default Browse