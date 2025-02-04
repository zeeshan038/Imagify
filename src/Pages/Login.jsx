import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <form className="relative bg-white p-10 rounded-xl shadow-md w-96 text-slate-600">
        <h1 className="text-center text-3xl font-semibold text-neutral-800">Login</h1>
        <p className="text-sm text-center text-gray-500">Welcome back! Please login to continue</p>

        <div className="border px-5 py-2 flex items-center gap-3 rounded-lg mt-6 bg-gray-50">
          <img src={assets.email_icon} alt="Email Icon" className="w-5" />
          <input
            type="email"
            placeholder="Email"
            required
            className="outline-none text-sm flex-1 bg-transparent"
          />
        </div>

        <div className="border px-5 py-2 flex items-center gap-3 rounded-lg mt-4 bg-gray-50">
          <img src={assets.lock_icon} alt="Lock Icon" className="w-5" />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm flex-1 bg-transparent"
          />
        </div>

        <p className="text-sm text-blue-600 mt-3 cursor-pointer text-right">Forgot Password?</p>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-lg mt-5 transition">
          Login
        </button>

        <p className="mt-5 text-center text-gray-600">
          Don't have an account? 
          <Link to="/signup" className="text-blue-600 font-medium hover:underline ml-1">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
