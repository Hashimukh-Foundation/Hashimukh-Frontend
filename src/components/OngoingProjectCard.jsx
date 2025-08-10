import React from "react";
import PropTypes from "prop-types";

const CardComponent = ({ imgSrc, title, description, onClick }) => {
  const handleSeeDetails = () => {
    if (onClick) {
      onClick({ title, description, imgSrc });
    } else {
      // Default behavior - could navigate to details page
      console.log(`Viewing details for: ${title}`);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-3 flex-shrink-0">
      {/* Image Section */}
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/path/to/fallback-image.jpg"; // Add your fallback image path
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
          {description}
        </p>

        {/* Call to Action Button */}
        <button
          onClick={handleSeeDetails}
          className="mb-2 w-full py-3 px-4 bg-white border-2 border-[#00df9a] text-[#00df9a] font-medium rounded-md hover:bg-teal-50 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2"
          type="button"
          aria-label={`View details for ${title}`}
        >
          See Details
        </button>

        <button
          onClick={handleSeeDetails}
          className="text-white w-full py-3 px-4 bg-[#00df9a] border-2 border-[#00df9a] font-medium rounded-md hover:bg-[#02b57e] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:ring-offset-2"
          type="button"
          aria-label={`View details for ${title}`}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CardComponent.defaultProps = {
  onClick: null,
};

export default CardComponent;
