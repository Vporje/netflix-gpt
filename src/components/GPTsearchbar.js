import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTsearchbar = () => {
  const selectedLanguage = useSelector(store=>store.lang.changedLanguage)

  return (
    <div className="relative top-28 mx-auto h-20 text-white flex items-center justify-center">
    <form className="p-4 h-[95%] flex w-1/2 bg-black z-10">
      <input
        className="text-black w-2/3 p-4 text-lg font-medium"
        type="text"
        placeholder={lang[selectedLanguage].placeholder}
      />
      <button className="bg-red-700 w-1/3 ml-2 font-medium text-lg">{lang[selectedLanguage].search}</button>
    </form>
  </div>
  );
};

export default GPTsearchbar;
