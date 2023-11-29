import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popularMovies } from "../utils/moviesSlice";
import { API_Options } from "../utils/constants";



const usePopularMovies = () => {
  // Fetching the popular movies from TMDB API and storing in the store

  const dispatch = useDispatch();

  const getPopularMovies = async()=> {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_Options);
    const popularMovieList = await data.json();
    dispatch(popularMovies(popularMovieList.results))
  }

  useEffect(()=>{
    getPopularMovies();
  },[])
};

export default usePopularMovies;
