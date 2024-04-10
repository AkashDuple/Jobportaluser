import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-[80px] z-50 relative">
      <div className="h-20 flex items-center justify-between fixed w-full text-black bg-slate-200 ">
        <div className=" flex text-3xl font-bold p-4">
          <Link to="/">Joboard.</Link>
        </div>

        <div className="flex justify-center items-center ">
          <div className="p-4 text-md md:text-lg font-semibold hover:text-gray-700">
            <a href="/">Jobs</a>
          </div>
          <span>|</span>
          <div className="p-4  text-md md:text-lg  font-semibold">
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
