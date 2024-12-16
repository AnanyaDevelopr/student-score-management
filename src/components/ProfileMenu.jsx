import React, { useState } from "react";
import { Link } from "react-router-dom";
import setAuthCookie, { deleteCookie } from "../utils/cookies";

const ProfileMenu = ({ username }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setAuthCookie("isLoggedIn", false, 3600000); // Set isLoggedIn as false
    deleteCookie("userName");
    deleteCookie("isLoggedIn");
    setMenuOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Profile Image */}
      <button
        onClick={toggleMenu}
        onMouseEnter={toggleMenu}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src="https://d14b9ctw0m6fid.cloudfront.net/default-avatar-profile-icon-4e14dc76933e42c3970ccb9447011d35.svg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 z-[999] w-48 bg-white rounded-md shadow-lg border border-gray-300">
          {username && (
            <p className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100">
              {username}
            </p>
          )}
          <Link
            to="/help-desk"
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Help Desk
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
