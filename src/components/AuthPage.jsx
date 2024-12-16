import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import setAuthCookie from "../utils/cookies";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const setCookie = (name, value, seconds) => {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};domain=.${window.location.hostname};HostOnly;Secure;SameSite=none;path=/`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call or validation logic here
    setAuthCookie("isLoggedIn", true, 3600000); // Set cookie when logged in
    setCookie("userName", formData.name, 3600000); // Store username in cookie
    setIsLoggedIn(true);
    navigate("/"); // Redirect to the home page after successful submission
  };

  const toggleForm = () => setIsSignUp(!isSignUp);
  // setCookie

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md">
      <h1 className="text-2xl text-red-600 font-bold text-center mb-6">
        {isSignUp ? "Sign Up" : "Login"}
      </h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-black">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-black">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <p className="text-center mt-4 text-black">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={toggleForm}
          className="text-red-600 hover:underline focus:outline-none"
        >
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
