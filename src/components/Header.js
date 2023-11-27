import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

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
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }

      return ()=>unsubscribe
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
  return (
    <div className="w-screen absolute z-10 flex justify-between">
      <div>
        <img
          src={LOGO}
          alt="logo"
          className="w-48 ml-8"
        />
      </div>
      {user && <div className="font-bold text-xl text-red-600 cursor-pointer p-2 mx-10 mt-3 flex">
        <img className="w-10 h-10 rounded-lg" src={user?.photoURL} alt="userImage" />
        <button className="mx-2" onClick={signOutHandler}>Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
