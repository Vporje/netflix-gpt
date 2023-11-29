import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 

  return (
    <div className="pt-6 pl-6 text-white">
      <h2 className="mb-2 font-semibold text-2xl">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
