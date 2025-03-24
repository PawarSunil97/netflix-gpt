import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTION } from "../utils/constant";
import { addGptMovieResult } from "../store/gptSlice";
const GptSearchBar = () => {
  const langKay = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results; 
  };
  const handleGptSearchClick = async () => {
   
      const queryResult =
        "Act as a movie recommendation system and suggest some movies for the query " +
        searchText.current.value +
        ". Only give me the names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Dhamaal, Golmaal, Koi Mil Gaya.";

      // Await the OpenAI API response
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: queryResult }],
      });

      // Validate response
      if (completion.choices) {
        const movieNames = completion.choices[0].message.content.split(",");
        const promisesArray = movieNames.map((movie) => searchMovieTMDB(movie));
        const TMDBResults = await Promise.all(promisesArray);
        dispatch(addGptMovieResult({movieName:movieNames,moviesResults:TMDBResults}))
      } 
    
  };

  return (
    <div className="-mt-20 flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-[400px] h-[180px]">
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          {lang[langKay].SearchforMovie} 🎬
        </h2>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            ref={searchText}
            className="p-3 flex-1 text-white bg-gray-800 rounded-l-lg outline-none"
            placeholder={lang[langKay].getSearchPlaceholder}
          />
          <button
            className="py-3 px-5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-r-lg text-sm"
            onClick={handleGptSearchClick}
          >
            {lang[langKay].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
