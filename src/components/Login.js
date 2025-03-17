import React, { useRef, useState } from "react";
import Header from "./Header";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { checkValidData } from "../utils/Validate";
import { BANER_IMAGE } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "./store/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Use navigation for redirection 
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const message = checkValidData(name, email, password);
    setErrorMessage(message || "");
    if(message)return;
    if(!isSignInForm){
//  sign up logic
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  updateProfile(user, {
    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
     const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUsers({ uid: uid, email: email, displayName: displayName, photoURL:photoURL })
            );
           
    navigate("/browse");
  }).catch((error) => {
    setErrorMessage(error.message)
  });
 
  console.log(user)
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode+""+errorMessage)
});
    }else{
// sign in logic
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => { 
  const user = userCredential.user;
  navigate("/browse");
  console.log(user)
  console.log("user successfully registered")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode+""+errorMessage);
});
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInform(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute inset-0 bg-cover bg-center bg-fixed">
        <img
          src={BANER_IMAGE}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <form
          noValidate
          onSubmit={(e) => e.preventDefault()}
          className="p-4 bg-black bg-opacity-60 w-96 flex flex-col rounded-lg shadow-lg"
        >
          <h2 className="text-white text-2xl mb-4 font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              type="text"
              ref={nameRef}
              placeholder="User Name"
              className="p-2 my-4 w-full border border-gray-500 bg-[#333] text-white rounded placeholder-gray-400"
              autoComplete="name"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="p-2 my-4 w-full border border-gray-500 bg-[#333] text-white rounded placeholder-gray-400"
            autoComplete="email"
          />

          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="p-2 my-4 w-full border border-gray-500 bg-[#333] text-white rounded placeholder-gray-400"
            autoComplete="current-password"
          />

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <button
            onClick={handleButtonClick}
            className="p-3 my-4 w-full bg-red-600 text-white rounded-md font-semibold hover:bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={toggleSignUpForm} className="text-white cursor-pointer">
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
