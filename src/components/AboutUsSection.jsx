import React from "react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <div className="py-16 bg-green-600 md:w-[80%] md:mx-auto md:rounded-2xl shadow-[0px_7px_29px_rgba(100,100,111,0.4)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
        <p className="mb-8 text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
          Hashimukh Foundation is a humanitarian organization working actively
          to improve the quality of underprivileged lives regardless of their
          religious status or political views. We believe in creating
          sustainable change through education, social welfare, and disaster
          recovery efforts.
        </p>
        <Link to="/about">
          {" "}
          <button
            className=" text-black w-[200px]  py-3 px-4 bg-white  font-medium rounded-md hover:bg-[#e9ffea] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4AB050] focus:ring-offset-2"
            type="button"
          >
            Read About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsSection;
