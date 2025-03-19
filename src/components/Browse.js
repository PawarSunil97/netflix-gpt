import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
const Browse = () => {
const data =useNowPlayingMovies()
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