import React from "react";

const VideoTitle = ({ title, info }) => {
  return (
    <div className="pt-44 px-12">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-5 w-2/5">{info}</p>
      <div className="mt-3">
        <button className="bg-gray-400 px-10 py-2 font-semibold text-base rounded-md">
          <img
            className="mb-1 mr-2 w-4 inline-block "
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="img"
          />
          Play
        </button>
        <button className="bg-gray-400 px-8 py-2 ml-2 font-semibold text-base rounded-md">
          <img
            className="mb-1 mr-2 w-5 inline-block "
            src="https://cdn-icons-png.flaticon.com/128/545/545674.png"
            alt="info"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
