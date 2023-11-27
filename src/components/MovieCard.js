import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-2">
      <div>
        <img src={IMAGE_CDN_URL + posterPath} alt="moviePoster" />
      </div>
    </div>
  );
};

export default MovieCard;
