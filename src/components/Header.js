import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  return (
    <div className="w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-56 ml-8"
        />
      </div>
      {user && <div className="font-bold text-xl text-red-600 cursor-pointer p-2 mx-10 mt-4 flex">
        <img className="w-14 m-1 rounded-lg" src={user?.photoURL} alt="userImage" />
        <button onClick={signOutHandler}>Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
