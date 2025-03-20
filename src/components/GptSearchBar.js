import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKay= useSelector((store)=>store.lang.lang)
  console.log(langKay)
  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-[400px] h-[180px]">
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
         {lang[langKay].SearchforMovie} 🎬
        </h2>
        <form className="flex">
          <input
            type="text"
            className="p-3 flex-1 text-white bg-gray-800 rounded-l-lg outline-none"
            placeholder={lang[langKay].getSearchPlaceholder}
          />
          <button className="py-3 px-5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-r-lg text-sm">
            {lang[langKay].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
