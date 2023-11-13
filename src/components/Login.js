import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  console.log(isSignInForm);

  const handleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg_img"
        />
      </div>
      <div className="flex justify-center">
        <form className="bg-black opacity-80 absolute top-36 mx-8 p-8 w-2/6 text-center text-white rounded-md">
          <h2 className="text-2xl pb-4 ml-8 font-medium text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && <input
            className="py-3 px-1 mt-4 w-10/12 rounded-md bg-gray-800 text-lg"
            type="text"
            placeholder="Full Name"
          />}
          <input
            className="py-3 px-1 mt-4 w-10/12 rounded-md bg-gray-800 text-lg"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="py-3 px-1 mt-4 w-5/6 rounded-md bg-gray-800 text-lg"
            type="password"
            placeholder="Password"
          />
          <button className="py-2 mt-8 w-5/6 bg-red-700 rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 m-2 text-left ml-8 mt-16 cursor-pointer hover:text-blue-800"
            onClick={handleSignInform}
          >
            {!isSignInForm ? "Already registered, Sign In now" : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
