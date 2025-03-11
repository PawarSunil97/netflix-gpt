import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInform(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <form className="p-12 bg-black bg-opacity-60 w-96 flex flex-col rounded-lg shadow-lg">
          <h2 className="text-white text-2xl mb-4 font-semibold">{isSignInForm ? "Sign In":"Sign Up"}</h2>
          {!isSignInForm &&
          <input
          type="text"
          placeholder="User Name"
          className="p-2 my-4 w-full border border-gray-500 bg-[#333] text-white rounded placeholder-gray-400"
        />
          }
          <input
            type="email"
            placeholder="Email"
            className="p-2 my-4 w-full border border-gray-500 bg-[#333] text-white rounded placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full border border-gray-500  bg-[#333] text-white rounded placeholder-bg-gray-400"
          />
          
          <button className="p-3 my-4 w-full bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">
           {
            isSignInForm ?"Sign In":"Sign Up"
          } 
          </button>
          <p onClick={toggleSignUpForm} className="text-white cursor-pointer">
           {isSignInForm?" New to netflix? Sign Up Now" :"Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
