import React from "react";
import BlurText from "./effect/BlurText.jsx";

const PortfolioHead = () => {
  return (
    <section className="bg-[#f3f3f3] text-center py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      {/* ------------------------------------------------------------------ */}
      {/* 🌈 BACKGROUND FLOATING SHAPES */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute top-[-10%] left-[-15%] w-[350px] h-[350px] bg-orange-400/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-15%] w-[350px] h-[350px] bg-red-400/20 blur-[150px] rounded-full animate-pulse"></div>


      {/* ------------------------------------------------------------------ */}
      {/* 🤝 TRUSTED BY SECTION */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex justify-center items-center gap-3 mb-6 sm:mb-10">
        <div className="flex -space-x-2 sm:-space-x-3">
          {[1, 2, 3].map((img, i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/150?img=${img}`}
              alt={`trusted-${i}`}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white shadow-sm object-cover"
            />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-gray-700 font-medium">
          Trusted by 100+ Clients Worldwide
        </p>
      </div>


      {/* ------------------------------------------------------------------ */}
      {/* MAIN HEADING WITH BLURTEXT + ANIMATED UNDERLINE */}
      {/* ------------------------------------------------------------------ */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6 flex flex-col items-center gap-3 relative">

        {/* Heading Line 1 */}
        <BlurText
          text="Our Creative"
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
          animateBy="words"
          direction="top"
        />

        {/* Heading Line 2 with Gradient */}
        <BlurText
          text="Portfolio Showcase"
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text"
          animateBy="words"
          direction="top"
        />

        {/* ✨ ANIMATED UNDERLINE */}
        <div className=" w-24 h-[3px] bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-[underline_2s_ease-in-out_infinite]"></div>

        <style>
          {`
            @keyframes underline {
              0% { width: 0px; opacity: 0.4; }
              50% { width: 140px; opacity: 1; }
              100% { width: 0px; opacity: 0.4; }
            }
          `}
        </style>
      </h1>


      {/* ------------------------------------------------------------------ */}
      {/* DESCRIPTION */}
      {/* ------------------------------------------------------------------ */}
      <p className="max-w-xl sm:max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-10 px-2">
        A showcase of our best design, development and branding work —
        crafted with passion, innovation and precision for brands worldwide.
      </p>


      {/* ------------------------------------------------------------------ */}
      {/* BUTTON WITH HOVER ANIMATION */}
      {/* ------------------------------------------------------------------ */}
      <button className="relative bg-black text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300 mx-auto flex items-center gap-2 overflow-hidden">
        <span className="relative z-10">Explore Projects</span>
        <span className="text-lg relative z-10">→</span>

        {/* Animated Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 hover:opacity-20 transition-all duration-300"></div>
      </button>

    </section>
  );
};

export default PortfolioHead;
