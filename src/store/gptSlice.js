import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies:null,
    movieName:null,
    moviesResults:null
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult:(state, action)=>{
      const{movieName,moviesResults}=action.payload
      state.movieName=movieName;
      state.moviesResults=moviesResults
    }
  },
});
export const {toggleGptSearch,addGptMovieResult}=gptSlice.actions
export default gptSlice.reducer