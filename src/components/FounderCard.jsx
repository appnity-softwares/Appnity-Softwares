import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { founder } from "../data/founderData.js";

const FounderCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="relative bg-[#dbdbdb] pt-32 md:pt-40 pb-20 font-inter overflow-hidden">

      {/* BIG HEADING – ALWAYS VISIBLE ABOVE IMAGE */}
      <h1
        className="
    text-[12vw] font-semibold leading-none text-center
    bg-gradient-to-b from-[rgba(22,22,22,0.6)] via-[rgba(0,0,0,0.25)] to-transparent
    bg-clip-text text-transparent opacity-40 select-none whitespace-nowrap

    /* --- MOBILE VERSION (normal position, no absolute) --- */
    block mb-4 z-20

    /* --- DESKTOP VERSION (absolute background text) --- */
    sm:absolute sm:top-5 sm:left-1/2 sm:-translate-x-1/2
    sm:text-[18vw] md:text-[12vw]
    sm:z-0 sm:pointer-events-none
  "
      >
        Meet {founder.name.split(" ")[0]}
      </h1>


      <style>
        {`
          @keyframes rotateInfinite {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* CONTENT SECTION */}
      <div className="relative z-20 container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20 md:gap-32 px-4 sm:px-6 md:px-10">

        {/* LEFT IMAGE BLOCK */}
        <div
          className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] mt-16"
          data-aos="fade-right"
        >
          <div className="relative rounded-2xl overflow-hidden image-with-half-blur-scoped">
            <img
              src={founder.imageUrl}
              alt={founder.name}
              className="w-full h-[60vh] sm:h-[65vh] md:h-[75vh] object-cover rounded-3xl"
            />
          </div>

          {/* ROTATING BADGE */}
          <div
            className="absolute bottom-[-20px] sm:bottom-[40px] right-[-10px] sm:right-[-60px]
            w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36
            rounded-full z-30 flex items-center justify-center overflow-hidden"
            style={{ animation: "rotateInfinite 6s linear infinite" }}
          >
            <img
              src={founder.badgeUrl}
              alt="Award Badge"
              className="w-full h-full object-fill rounded-full"
            />
          </div>

          {/* SOCIAL ICONS */}
          <div className="absolute bottom-4 left-4 flex space-x-3 text-gray-500 z-30">
            {founder.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                className="bg-[#302929] text-white p-2 rounded-full shadow-md w-8 h-8 flex items-center justify-center"
              >
                <i className={socialLink.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div
          className="max-w-xl text-center lg:text-left z-20 mt-10 md:mt-16 px-4 sm:px-10"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {founder.title}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-md leading-7 text-justify">
            {founder.bio}
          </p>

          <hr className="border-t border-gray-400 my-10 sm:my-14 max-w-lg mx-auto lg:mx-0" />

          {/* EXPERIENCE LIST */}
          <div className="space-y-6 text-xs sm:text-sm">
            {founder.experience.map((exp, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-bold text-gray-600">{exp.role}</span>
                <span className="text-gray-500">{exp.years}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
