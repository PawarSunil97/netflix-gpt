import { createSlice } from "@reduxjs/toolkit";

const langChangSlice=createSlice({
    name:"configLang",
    initialState:{
        lang:"en"
    },
    reducers:{
        channgeLanguage:(state,action)=>{
           state.lang=action.payload
        }
    }
})

export const {channgeLanguage}=langChangSlice.actions
export default langChangSlice.reducer