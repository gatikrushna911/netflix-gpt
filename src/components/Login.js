import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const handleIsSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };
  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form className=" absolute bg-black text-white my-36 mx-auto left-0 right-0 w-4/12 p-16 rounded-md bg-opacity-70">
        <h1 className="font-bold text-3xl p-2">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            className="w-full my-4 p-4 rounded-md bg-gray-700"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="w-full my-4 p-4 rounded-md bg-gray-700"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          className="w-full my-4 p-4 rounded-md bg-gray-700"
          type="password"
          placeholder="Password"
        ></input>
        <button className="w-full my-4 p-3 bg-red-500 rounded-md" type="submit">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={handleIsSignInForm}>
          {isSingInForm
            ? "New to Netflix ? Sign up Now"
            : "Already a Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;