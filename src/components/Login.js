import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkFormValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR, BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  // console.log(isSignInForm);

  const handleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Writing the logic for signIn/signUp form validation
    const message = checkFormValidation(
      // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return; //if there is a message, it means there is some error, so don't proceed further, just return

    //now here we can write logic of signIn/signUp
    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "<--->" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "<--->" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src={BG_IMG}
          alt="bg_img"
        />
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-black opacity-80 absolute top-36 mx-8 p-8 w-2/6 text-center text-white rounded-md"
        >
          <h2 className="text-2xl pb-4 ml-8 font-medium text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={name}
              className="py-3 px-1 mt-4 w-10/12 rounded-md bg-gray-800 text-lg"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="py-3 px-2 mt-4 w-10/12 rounded-md bg-gray-800 text-lg"
            type="text"
            placeholder="Email Id"
          />
          <input
            ref={password}
            className="py-3 px-2 mt-4 w-5/6 rounded-md bg-gray-800 text-lg"
            type="password"
            placeholder="Password"
          />
          <p className="text-lg font-medium text-red-600 mt-3">
            {errorMessage}
          </p>
          <button
            className="py-2 m-8 w-5/6 bg-red-500 bg-opacity-100 rounded-md text-lg font-medium"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 m-2 text-left ml-8 mt-16 cursor-pointer hover:text-blue-800"
            onClick={handleSignInform}
          >
            {!isSignInForm
              ? "Already registered, Sign In now"
              : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
