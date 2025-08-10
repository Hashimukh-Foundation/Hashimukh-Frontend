import React from "react";
import backgroundImage from "../assets/background.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{
        backgroundImage: `
          radial-gradient(
            circle,
            rgba(0, 0, 0, 0.5) 0%,     /* Darker in the center */
            rgba(0, 0, 0, 0.1) 100%    /* Lighter towards edges */
          ),
          url(${backgroundImage})
        `,
      }}
    >
      {/* Hero content goes here */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-12 ">
          Working for a sustainable growth
        </h1>
        <button
          className="
          
    bg-[#00df9a] 
    text-black 
    font-semibold 
    text-lg 
    py-4 
    w-[200px] 
    mx-auto 
    
    shadow-md 
    hover:bg-[#00c27b] 
    hover:shadow-lg 
    transition 
    duration-300
    ease-in-out
    cursor-pointer
  "
        >
          Become a volunteer
        </button>
      </div>
    </div>
  );
};

export default Hero;
