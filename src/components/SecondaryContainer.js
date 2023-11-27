import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (movies === null) return;

  return (
    movies.nowPlayingMovies && (
      <div className="w-screen bg-black">
        <div className="-mt-64 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Award Wining Movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
