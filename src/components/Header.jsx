import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { getCookie } from "../utils/cookies";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const isLoggedIn = getCookie("isLoggedIn");
  const username = getCookie("userName");

  // Make sure isLoggedIn is correctly parsed as boolean
  const isUserLoggedIn = isLoggedIn === true ? true : false;
  console.log(isUserLoggedIn,"isUserLoggedIn");
  return (
    <header className="bg-white shadow-lg px-16">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-black hover:text-red-600 transition-colors"
        >
          <img
            src="https://i.ibb.co/DtZ8f8M/processed-logo-v2-2.png"
            alt="logo"
            className="h-16 w-full"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex justify-center items-center space-x-6">
          <Link
            to="/"
            className="text-black hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/student-details"
            className="text-black hover:text-red-600 transition-colors"
          >
            Student Details
          </Link>
          <Link
            to="/about-us"
            className="text-black hover:text-red-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="text-black hover:text-red-600 transition-colors"
          >
            Contact Us
          </Link>
          {isUserLoggedIn ? (
            <ProfileMenu username={username} />
          ) : (
            <Link to="/auth">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-all">
                Sign Up
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
