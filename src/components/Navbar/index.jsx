import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div style={{ zIndex: 100 }} className="h-[100px]">
      <div className="h-20 p-10 flex items-center fixed w-full z-100 py-15 text-black bg-slate-200">
      <div className="text-4xl pl-20 font-bold"><Link to='/'>Joboard.</Link></div>
    </div>
    </div>
  );
}

export default Navbar;
