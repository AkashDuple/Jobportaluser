import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div style={{ zIndex: 100, position: 'relative' }} className="h-[80px] z-50">
    <div className="h-20 p- flex items-center fixed w-full  text-black bg-slate-200">
      <div className="text-4xl pl-20 font-bold"><Link to='/'>Joboard.</Link></div>
    </div>
  </div>
  
  );
}

export default Navbar;
