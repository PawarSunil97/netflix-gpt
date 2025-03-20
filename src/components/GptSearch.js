import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggesion from './GptSearchSuggesion'
import { BANER_IMAGE } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute inset-0 bg-cover bg-center bg-fixed -z-10">
              <img
                src={BANER_IMAGE}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
        <GptSearchBar />
        <GptSearchSuggesion />
    </div>
  )
}

export default GptSearch