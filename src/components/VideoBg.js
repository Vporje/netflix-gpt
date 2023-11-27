import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  const currentTrailer = useSelector((store) => store.movies?.currentTrailer);
  useTrailerVideo()

  return (
    <div>
      <iframe
        width="560"
        height="315"
        //We can use either useState to dynamically change the video key or we can store the trailer object into redux store and from store we takeout the video key and concatanate the below src
        src={"https://www.youtube.com/embed/" + currentTrailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
