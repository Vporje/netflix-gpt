import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies:null,
    upcomingMovies:null,
    currentTrailer: null,
  },
  reducers: {
    nowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    popularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    topRatedMovies:(state,actions)=>{
      state.topRatedMovies = actions.payload;
    },
    upcomingMovies:(state,actions)=>{
      state.upcomingMovies = actions.payload;
    },
    addTrailer: (state, actions) => {
      state.currentTrailer = actions.payload;
    },
  },
});

export const { nowPlayingMovies, addTrailer, popularMovies, topRatedMovies, upcomingMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
