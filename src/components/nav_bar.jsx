import React from "react";

function Navbar() {
  return (
    <div>
      <div>
        <nav
          className="
          flex
          justify-between
          items-center
          border-2
        border-white/5
          rounded-full
          bg-linear-to-t from-[#3d3c3c59] to-[#a3a1a13d]
          bg-opacity-5
          backdrop-blur-sm
          py-2
          ">
          
          <div className="pl-4 font-bold text-lg">AestheticFit</div>
          <div className="flex gap-4">
            <a href="#">Workout</a>
            <a href="#">Nutrition</a>
          </div>
          <button className="px-6 py-1 mr-2 border-2 border-white/5 rounded-3xl bg-white">
            Sign Up
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
