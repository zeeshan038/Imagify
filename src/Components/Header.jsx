import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div
            className="flex flex-col justify-center items-center text-center 
     h-screen "
        >
            <div
                className="text-stone-500 inline-flex text-center gap-2 bg-white 
        px-6 py-1 rounded-full border border-neutral-500"
            >
                <p>Best text to image genrator</p>
                <img src={assets.star_icon} alt="" />
            </div>
            <h1
                className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px]
            mx-auto mt-10 text-cen"
            >
                Turn text to <span className="text-blue-600">image</span>, in seconds.
            </h1>
            <p className="text-center max-w-xl mx-auto mt-5">
                Unleash your creativity with AI. Turn your imagination into visual art
                in seconds - just type, and watch the magic happen.
            </p>
          <Link to={'/result'}>
          <button
                className="sm:text-lg text-white bg-black w-auto
           mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
            >
                Genrate Images
                <img src={assets.star_group} alt="" className="h-6" />
            </button></Link>

            <div className="flex flex-wrap justify-center mt-16 gap-2">
                {Array(6)
                    .fill("")
                    .map((item, index) => (
                        <img
                            className="rounded hover:scale-105 transition-all
                     duration-300 cursor-pointer max-sm:w-10"
                            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                            alt=""
                            key={index}
                            width={70}
                        />
                    ))}
            </div>
            <p className="mt-2 text-neutral-600">Genrated images from imagify </p>
        </div>
    );
};

export default Header;
