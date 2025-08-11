import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/company_logo.png";

const Gallery = () => {
  return (
    <div className="relative min-h-screen">
      {/* Logo at the top center */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img
            src={logo}
            alt="Hashimukh Logo"
            className="h-8 sm:h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Centered text */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-7xl font-black text-[#00A63E] ">Coming Soon...</h1>
      </div>
    </div>
  );
};

export default Gallery;
