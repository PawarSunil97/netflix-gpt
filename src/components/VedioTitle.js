import React from 'react';
import { Info, Play } from "lucide-react"; // Using Lucide icons

const VideoTitle = ({ Movietitle, MovieOverview }) => {
  return (
    <div className="absolute w-full aspect-video   px-20 pt-[15%] md:px-20 bg-gradient-to-r from-black/80 via-black/40 to-transparent">
      {/* Movie Title */}
      <h1 className="text-white text-4xl md:text-6xl font-bold max-w-2xl">
        {Movietitle}
      </h1>
      
      {/* Movie Overview */}
      <p className="text-white mt-4 max-w-md text-lg md:text-xl">
        {MovieOverview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-300 transition duration-300 shadow-md">
          <Play size={24} /> Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-600 transition duration-300 shadow-md">
          <Info size={24} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
