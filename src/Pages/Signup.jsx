import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex items-center justify-center h-[80vh] p-4">
            <form className="w-full max-w-md bg-white p-10 rounded-xl shadow-md text-slate-600">
                <h1 className="text-center text-2xl text-neutral-700 font-semibold">Sign Up</h1>
                <p className="text-sm text-center mb-5">Create an account to get started</p>
                
                <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-4">
                    <img src={assets.profile_icon} alt="" className="h-6 w-6" />
                    <input type="text" placeholder="Name" required className="outline-none text-sm w-full" />
                </div>
                
                <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-4">
                    <img src={assets.email_icon} alt="" className="h-6 w-6" />
                    <input type="email" placeholder="Email" required className="outline-none text-sm w-full" />
                </div>
                
                <div className="border px-4 py-2 flex items-center gap-2 rounded-lg mt-4">
                    <img src={assets.lock_icon} alt="" className="h-6 w-6" />
                    <input type="password" placeholder="Password" required className="outline-none text-sm w-full" />
                </div>
                
                <button type="submit" className="bg-blue-600 w-full text-white py-2 rounded-lg mt-6 font-medium hover:bg-blue-700 transition">Create Account</button>
                
                <p className="mt-5 text-center text-sm">Already have an account? 
                    <Link to={'/login'} className="text-blue-600 hover:underline"> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
