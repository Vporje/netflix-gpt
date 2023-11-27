import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  const currentTrailer = useSelector((store) => store.movies?.currentTrailer);
  useTrailerVideo(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        //We can use either useState to dynamically change the video key or we can store the trailer object into redux store and from store we takeout the video key and concatanate the below src
        src={"https://www.youtube.com/embed/" + currentTrailer?.key +"?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
