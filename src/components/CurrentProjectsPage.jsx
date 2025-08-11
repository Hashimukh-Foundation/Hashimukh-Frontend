import React, { useState, useEffect } from "react";
import CardComponent from "../components/CardComponent.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardBG from "../assets/cardBG.jpg";
import cardBG2 from "../assets/cardBG2.jpg";
import cardBG3 from "../assets/cardBG3.jpg";

const CurrentProjectsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      imgSrc: cardBG,
      title: "Medical Eye Camp 2025",
      description:
        "There are many variations of passages of Lorem Ipsum available...",
    },
    {
      imgSrc: cardBG3,
      title: "Self Reliance Project",
      description:
        "There are many variations of passages of Lorem Ipsum available...",
    },
    {
      imgSrc: cardBG2,
      title: "Winter Cloth Distribution",
      description:
        "There are many variations of passages of Lorem Ipsum available...",
    },
  ];

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200); // breakpoint at 1200px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col m-auto items-center">
      <h1 className="text-5xl font-bold m-7">Project Showcase</h1>

      {/* Desktop View - Normal Grid */}
      {!isMobile && (
        <div className="flex justify-center w-full h-full max-w-7xl px-4">
          {projects.map((project, index) => (
            <CardComponent
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      )}

      {/* Mobile/Tablet View - Carousel */}
      {isMobile && (
        <div className="w-full max-w-sm mx-auto relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <CardComponent
                    imgSrc={project.imgSrc}
                    title={project.title}
                    description={project.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-2 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-[#4AB050] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
      <button
        className="my-4 text-white w-[240px] py-3 px-4 bg-[#4AB050] font-medium rounded-md hover:bg-[#357e3a] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4AB050] focus:ring-offset-2"
        type="button"
      >
        Show more
      </button>
    </div>
  );
};

export default CurrentProjectsPage;
