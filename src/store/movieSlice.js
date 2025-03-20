import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingMovie:null,
        trailerVedio:null,
    },
    reducers:{
       addNowPlayingMovie:(state,action)=>{
         state.nowplayingMovie=action.payload
       },
       addPopularMovie:(state, action)=>{
        state.popularMovie=action.payload
       },
       addUpcommingMovie:(state, action)=>{
        state.UpcommingMovie=action.payload
       },
       addTopRatedgMovie:(state, action)=>{
        state.topRatedMovie=action.payload
       },
       
       addTrailerVedio:(state,action)=>{
        state.trailerVedio=action.payload
       },
    }
})

export const {addNowPlayingMovie,addTrailerVedio,addPopularMovie,addUpcommingMovie,addTopRatedgMovie}=movieSlice.actions
export default movieSlice.reducer;
