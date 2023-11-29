import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { upcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies =()=>{
    //fetching upcoming movies list from TMDB and store it into store
    const dispatch = useDispatch();

    async function getUpcomingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_Options)
        const json = await data.json();
        dispatch(upcomingMovies(json.results))
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[])

}

export default useUpcomingMovies;