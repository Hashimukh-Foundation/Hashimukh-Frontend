// PhotosSection.jsx
import React from "react";

const photos = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
];

export default function PhotosSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Center button */}
        <div className="flex justify-center">
          <button
            className="my-4 text-white w-[240px] py-3 px-4 bg-[#4AB050] font-medium rounded-md hover:bg-[#357e3a] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4AB050] focus:ring-offset-2"
            type="button"
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
