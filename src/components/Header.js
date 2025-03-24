import React, { useState, useRef, useEffect } from "react";
import { NETFLIX_LOGO, SUPPORT_LANGUAGE, USER_AVTAR } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUser } from "../store/userSlice";
import { toggleGptSearch } from "../store/gptSlice";
import { FaGlobe } from "react-icons/fa";
import { channgeLanguage } from "../store/langConfigSlice";
import lang from "../utils/languageConstant";
const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsuscribe when component is unmoute
    return () => unSubscribe();
  }, []);

  const handleProfileDropDown = () => {
    setShowProfile((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const hancleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };
  const handleLangChange = (e) => {
    dispatch(channgeLanguage(e.target.value));
  };
 
  return (
    <div className="absolute top-0 left-0 w-full px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-b from-black to-transparent z-20">
      {/* Netflix Logo */}
      <div className="mb-4 sm:mb-0">
        <img src={NETFLIX_LOGO} className="w-32 sm:w-44 h-auto" alt="Netflix Logo" />
      </div>

      {/* User Profile Section */}
      {user && (
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {showGptSearch && (
            <div className="relative">
              <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <select
                className="appearance-none bg-black text-white px-10 py-2 rounded border border-gray-600 focus:outline-none"
                onChange={handleLangChange}
              >
                {SUPPORT_LANGUAGE.map((lang) => (
                  <option key={lang.identifire} value={lang.identifire}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* GPT Search Button */}
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-500 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={hancleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          {/* User Name */}
          <h1 className="text-white font-semibold hidden sm:block">
            {user?.displayName ?? "User"}
          </h1>

          {/* Profile Avatar */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleProfileDropDown}
              type="button"
              className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
              id="user-menu-button"
              aria-expanded={showProfile}
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" src={USER_AVTAR} alt="User Avatar" />
            </button>

            {/* Dropdown Menu */}
            {showProfile && (
              <div
                className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
