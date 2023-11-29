import React from "react";
import GPTsearchbar from "./GPTsearchbar";
import GPTsearchedContent from "./GPTsearchedContent";
import { BG_IMG } from "../utils/constants";

const GPTsearchPage = () => {
  return (
    <div>
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="bg_img"
        />
      </div>
      <GPTsearchbar />
      <GPTsearchedContent />
    </div>
  );
};

export default GPTsearchPage;
