import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import second from "../assets/second1.jpeg";
const Section2 = () => {

      useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,       // 🔥 Animation runs ONLY on scroll down!
        easing: "ease-out",
      });
    }, []);
  const logos = [
    "https://framerusercontent.com/images/3cWSgJFsUVvZeOw9LdQmTOSVFhE.svg?width=58&height=32",
    "https://framerusercontent.com/images/nfabfL1KTOOmw22T9soWodkE5Q.svg?width=127&height=32",
    "https://framerusercontent.com/images/nmwtsE1SWD34rSXL3OhLE7CTn0.svg?width=83&height=32",
    "https://framerusercontent.com/images/oqkjAivG8qVmaPBg07Z4Yst8rwk.svg?width=162&height=32",
    "https://framerusercontent.com/images/pFmkT2mGzyfTzJsLN2Lr3fdbIk.svg",
    "https://framerusercontent.com/images/zhMiNUjAyE25vd6XOETCIwS38.svg?width=131&height=32"
  ];

  return (
    <div className="bg-[#ffffff]   lg:px-2 rounded-2xl width-full">
      {/* 🔹 Top Image Section */}
      <div data-aos="fade-out"  >
        <img
          src={second}
          alt="Design Showcase"
          className="w-full h-auto rounded-t-3xl "
        />
      </div>

      {/* 🔹 Marquee Section */}
      <div className="relative overflow-hidden bg-[#f3f3f3] py-10 rounded-b-3xl">
        {/* Fade Blur on both sides */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#f3f3f3] via-[#f3f3f3]/80 to-transparent z-10"></div>

        <div className="overflow-hidden will-auto ">
          <div className=" flex gap-20 items-center whitespace-nowrap animate-marquee px-6 py-4">
            {Array(2)
              .fill(0)
              .map((_, repeatIndex) => (
                <React.Fragment key={repeatIndex}>
                  {logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt={`Logo ${i + 1}`}
                      className="h-8 w-auto object-contain  hover:opacity-100 transition-all duration-300"
                    />
                  ))}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>

      {/* 🔹 Keyframes for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Section2;
