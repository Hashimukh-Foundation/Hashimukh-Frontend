import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/company_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  function handlePolicyClick() {
    navigate("/policies");
  }
  function handleAboutUsClick() {
    navigate("/about");
  }

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6 text-white">
        {/* Logo */}
        <img
          src={logo}
          alt="Hashimukh Logo"
          className="h-8 sm:h-10 w-auto cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li
            className="hover:text-[#4AB050] cursor-pointer"
            onClick={handlePolicyClick}
          >
            Policies
          </li>
          <li className="hover:text-[#4AB050] cursor-pointer">Gallery</li>
          <li
            className="hover:text-[#4AB050] cursor-pointer"
            onClick={handleAboutUsClick}
          >
            About
          </li>
          <li className="hover:text-[#4AB050] cursor-pointer">Contact</li>
          <li className="hover:text-[#4AB050] cursor-pointer">Join Us</li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={handleNav}
          className="block md:hidden z-30 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-[#000300] border-r border-gray-900 ease-in-out duration-500 z-40 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="m-6">
          <img
            src={logo}
            alt="Hashimukh Logo"
            className="h-8 sm:h-10 w-auto cursor-pointer"
          />
        </div>
        <ul className="uppercase space-y-4 px-6 text-lg text-[#d9d9d9]">
          <li
            className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050]"
            onClick={handlePolicyClick}
          >
            Policies
          </li>
          <li className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050">
            Gallery
          </li>
          <li
            className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050"
            onClick={handleAboutUsClick}
          >
            About
          </li>
          <li className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050">
            Contact
          </li>
          <li className="cursor-pointer hover:text-[#4AB050">Join Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
