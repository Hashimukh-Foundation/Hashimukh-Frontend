import React from "react";
import backgroundImage from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-12">
          Working for a sustainable growth
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#00df9a] text-black font-semibold text-lg px-8 py-4 box-border shadow-md hover:bg-[#00c27b] hover:shadow-lg transition duration-300 ease-in-out cursor-pointer min-w-[220px]">
            Become a volunteer
          </button>
          <button className="text-white font-semibold text-lg px-8 py-4 box-border shadow-md cursor-pointer border-2 border-[#00df9a] hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out min-w-[220px]">
            See our work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
