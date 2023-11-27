import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { nowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetching the movies data from TMDB and updating the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(nowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};


export default useNowPlayingMovies;