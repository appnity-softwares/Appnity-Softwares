
import React from "react";
import heroData from "../data/heroData";
import BlurText from "./effect/BlurText.jsx";

const Hero = () => {
  return (
    <section className="bg-[#f3f3f3] text-center py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Top Section */}
      <div className="flex justify-center items-center gap-3 mb-6 sm:mb-8">
        <div className="flex -space-x-2 sm:-space-x-3">
          {heroData.trustedBy.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`trusted-by-${index}`}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm object-cover"
            />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 font-medium">
          {heroData.trustedBy.text}
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6 flex flex-col items-center gap-3">
        {Object.values(heroData.heading).map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-3"
          >
            {line.map((element, elementIndex) => {
              if (element.type === "text") {
                return (
                  <span key={elementIndex} className={element.className}>
                    <BlurText
                      text={element.value + " "}
                      className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center"
                      animateBy="words"
                      direction="top"
                    />
                  </span>
                );
              } else if (element.type === "image") {
                return (
                  <img
                    key={elementIndex}
                    src={element.src}
                    alt={element.alt}
                    className="hidden sm:block w-20 h-16 rounded-full object-cover"
                  />
                );
              }
              return null;
            })}
          </div>
        ))}
      </h1>

      {/* Description */}
      <p className="max-w-xl sm:max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 px-2">
        {heroData.description}
      </p>

      {/* Button */}
      <button className="bg-[#333] text-white px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-black transition-all hover:scale-105 duration-200 flex items-center justify-center mx-auto gap-2">
        <a href="#price010">{heroData.buttonText} </a><span className="text-lg">→</span>
      </button>
    </section>
  );
};

export default Hero;
