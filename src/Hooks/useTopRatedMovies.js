import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { topRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = ()=>{
    //fetching the top rated movies list from TMDB API and store it into the store
   const dispatch = useDispatch();
    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_Options);
        const json = await data.json();
        dispatch(topRatedMovies(json.results))
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])
}


export default useTopRatedMovies;