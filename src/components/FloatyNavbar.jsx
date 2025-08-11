import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/company_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => setNav(!nav);

  function handlePolicyClick() {
    navigate("/policies");
    setNav(false); // close mobile menu on click
  }
  function handleAboutUsClick() {
    navigate("/about");
    setNav(false); // close mobile menu on click
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar only when scrolled down
      setIsScrolled(currentScrollY > 50);
      setShowNavbar(currentScrollY > 50);

      // Hide navbar when scrolling down fast, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 lg:left-[15%] lg:right-[15%] z-30 transition-all duration-300 bg-[#E2E2E2] shadow-lg text-black rounded-xl lg:rounded-2xl ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div
          className={`flex justify-between items-center max-w-[1240px] mx-auto px-6 h-16`}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Hashimukh Logo"
            className="h-8 sm:h-10 w-auto cursor-pointer"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li
              className="hover:text-[#4AB050] cursor-pointer transition-colors duration-200"
              onClick={handlePolicyClick}
            >
              Policies
            </li>
            <li className="hover:text-[#4AB050] cursor-pointer transition-colors duration-200">
              Gallery
            </li>
            <li
              className="hover:text-[#4AB050] cursor-pointer transition-colors duration-200"
              onClick={handleAboutUsClick}
            >
              About
            </li>
            <li className="hover:text-[#4AB050] cursor-pointer transition-colors duration-200">
              Contact
            </li>
            <li className="hover:text-[#4AB050] cursor-pointer transition-colors duration-200">
              Join Us
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={handleNav}
            className="block md:hidden z-40 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu OUTSIDE nav */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-[#000300] border-r border-gray-900 ease-in-out duration-500 z-50 transform rounded-r-2xl ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="m-6">
          <img
            src={logo}
            alt="Hashimukh Logo"
            className="h-8 sm:h-10 w-auto cursor-pointer"
            onClick={() => setNav(false)} // optional close on logo click
          />
        </div>
        <ul className="uppercase space-y-4 px-6 text-lg text-[#d9d9d9]">
          <li
            className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050] transition-colors duration-200"
            onClick={handlePolicyClick}
          >
            Policies
          </li>
          <li className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050] transition-colors duration-200">
            Gallery
          </li>
          <li
            className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050] transition-colors duration-200"
            onClick={handleAboutUsClick}
          >
            About
          </li>
          <li className="border-b border-gray-600 pb-2 cursor-pointer hover:text-[#4AB050] transition-colors duration-200">
            Contact
          </li>
          <li className="cursor-pointer hover:text-[#4AB050] transition-colors duration-200">
            Join Us
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
