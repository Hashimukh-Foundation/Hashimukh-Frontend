// JoinUsSection.jsx
import React from "react";
import { Users, Star, HandHeart } from "lucide-react"; // Icons (optional)
import { Link } from "react-router-dom";

export default function JoinUsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
          Join Us
        </h2>
        <p className="text-gray-600 mb-10">
          Join us through any of the following methods and play your part in
          serving humanity in need.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Volunteer */}
          <Link to="/joinus">
            <div className="border-2 border-[#4AB050] rounded-2xl p-6 flex flex-col items-center bg-[#4AB050] text-white hover:scale-105 transition cursor-pointer">
              <Users size={40} className="mb-4" />
              <h3 className="text-xl font-semibold">Join as a Volunteer</h3>
            </div>
          </Link>

          {/* Patron */}
          <Link to="/joinus">
            <div className="border-2 border-[#4AB050] rounded-2xl p-6 flex flex-col items-center bg-[#4AB050] text-white hover:scale-105 transition cursor-pointer">
              <HandHeart size={40} className="mb-4" />
              <h3 className="text-xl font-semibold">Patron</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
