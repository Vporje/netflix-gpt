import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTsearch } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { selectedLanguage } from "../utils/langConfig";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const toggleStateForGPTsearchHomepage = useSelector(store=>store.gpt.showToggleState)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(auth)
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        //Logic to storing the data into the store
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe;
    });
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error")
      });
  };

  const handleGPTsearch = () => {
    dispatch(toggleGPTsearch());
  };

  const handleLanguageSelect = (e) => {
    // console.log(e.target.value)
    dispatch(selectedLanguage(e.target.value));
  };

  return (
    <div className="w-screen p-5 h-20 absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img src={LOGO} alt="logo" className="w-48 ml-8 -mt-4" />
      </div>
      {user && (
        <div className="text-center font-bold cursor-pointer mx-10 flex">
          <select
            className="mr-2 px-2 bg-gray-400 rounded-md border-0"
            onChange={handleLanguageSelect}
          >
            {SUPPORTED_LANGUAGES.map((language) => {
              return (
                <option key={language.name} value={language.identifier}>
                  {language.name}
                </option>
              );
            })}
          </select>
          <button
            className="h-10 px-4 border border-gray-900 bg-blue-400 text-black rounded-lg mr-2"
            onClick={handleGPTsearch}
          >
           {toggleStateForGPTsearchHomepage ? "Homepage" : "GPT Search"} 
          </button>
          <img
            className="w-10 h-10 rounded-lg"
            src={user?.photoURL}
            alt="userImage"
          />

          <button
            className="mx-2 text-xl font-bold text-red-700 hover:underline decoration-2 decoration-red-700 underline-offset-4"
            onClick={signOutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
