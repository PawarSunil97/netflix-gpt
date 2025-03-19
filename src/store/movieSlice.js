import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowplayingMovie:null,
        trailerVedio:null
    },
    reducers:{
       addNowPlayingMovie:(state,action)=>{
         state.nowplayingMovie=action.payload
       },
       addTrailerVedio:(state,action)=>{
        state.trailerVedio=action.payload
       }
    }
})

export const {addNowPlayingMovie,addTrailerVedio}=movieSlice.actions
export default movieSlice.reducer;
