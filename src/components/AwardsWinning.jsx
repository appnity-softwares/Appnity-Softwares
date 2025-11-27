import React, { useState, memo } from "react";
import { awards } from "../data/awardsData.js"; // Data ko alag file se import kiya gaya hai

// AwardItem component ko memoize kiya gaya hai taaki performance behtar ho.
const AwardItem = memo(({ award, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`relative grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 items-center py-5 sm:py-6 md:py-8 border-b transition-all duration-300 ${isHovered ? "border-orange-500" : "border-gray-400"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Left */}
      <span className={`text-left text-[14px] sm:text-[15px] font-light transition-colors ${isHovered ? "text-orange-500" : "text-gray-600"}`}>
        {award.name}
      </span>

      {/* Middle */}
      <div className="relative flex justify-start sm:justify-center items-center">
        <span className={`font-medium text-[15px] sm:text-[17px] transition-colors ${isHovered ? "text-orange-500" : "text-gray-800"}`}>
          {award.title}
        </span>

        {/* Hover Image */}
        {isHovered && (
          <div className="absolute right-0 sm:right-[-90px] bottom-[-30px] sm:bottom-[12px] bg-orange-600 rounded-full p-2 flex items-center justify-center shadow-lg transition-all duration-300 w-16 h-16 sm:w-24 sm:h-24 md:w-16 md:h-16">
            {award.images.map((imgSrc, i) => (
              imgSrc && <img key={i} src={imgSrc} alt={`${award.name}-${i}`} className="w-full h-full object-contain p-1" />
            ))}
          </div>
        )}
      </div>

      {/* Right */}
      <span className={`text-left sm:text-right text-[14px] sm:text-[15px] font-light transition-colors ${isHovered ? "text-orange-500" : "text-gray-600"}`}>
        <a href={award.link}>{award.company}</a>
      </span>
    </div>
  );
});

const AwardsWinning = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#dbdbdb] py-20 md:py-28 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-center text-[32px] sm:text-[42px] md:text-[60px] font-extrabold text-black mb-14 md:mb-20 leading-tight">
          Our Creations
        </h2>
        <div className="border-t border-gray-700">
          {awards.map((award, index) => (
            <AwardItem
              key={index}
              award={award}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsWinning;
