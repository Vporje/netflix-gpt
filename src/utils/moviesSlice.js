import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        currentTrailer:null,
    },
    reducers:{
        nowPlayingMovies:(state,actions)=>{
            state.nowPlayingMovies = actions.payload;
        },
        addTrailer:(state,actions)=>{
            state.currentTrailer = actions.payload;
        },
    }
})

export const {nowPlayingMovies,addTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;