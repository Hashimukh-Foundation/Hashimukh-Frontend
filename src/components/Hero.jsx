import React from "react";
import backgroundImage from "../assets/bgw.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-12">
          Working for a <span className="text-[#4AB050]">sustainable</span>{" "}
          growth
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/joinus">
            <button className="bg-[#4AB050] text-black font-semibold text-lg px-8 py-4 min-w-[220px] h-[56px] flex items-center justify-center shadow-md hover:bg-[#3d9443] hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
              Become a volunteer
            </button>
          </Link>

          <button
            className="text-white font-semibold text-lg px-8 py-4 min-w-[220px] h-[56px] flex items-center justify-center shadow-md cursor-pointer border-2 border-[#4AB050] hover:bg-[#4AB050] hover:text-black transition duration-300 ease-in-out"
            onClick={() =>
              document
                .getElementById("projectShowcase")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            See our work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
