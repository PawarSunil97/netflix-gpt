import React, { useState, useRef, useEffect } from "react";
import { NETFLIX_LOGO,USER_AVTAR } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers, removeUser } from "../store/userSlice";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const dispatch = useDispatch();

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
    return ()=>unSubscribe();
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

  return (
    <div className="absolute top-0 left-0 w-full px-12 py-4 bg-gradient-to-b from-black to-transparent z-20 flex justify-between">
      {/* Netflix Logo */}
      <div>
        <img src={NETFLIX_LOGO} className="w-44 h-auto" alt="Netflix Logo" />
      </div>

      {/* User Profile Section */}
      {user && (
        <div className="flex items-center space-x-4">
          <h1 className="text-white font-semibold">
            {user?.displayName ?? "User"}
          </h1>

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
              <img
                className="w-12 h-12 rounded-full"
                src={USER_AVTAR}
                alt="User Avatar"
              />
            </button>

            {/* Dropdown Menu */}
            {showProfile && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </a>
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
