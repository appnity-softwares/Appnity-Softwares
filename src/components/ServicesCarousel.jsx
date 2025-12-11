import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import image from "../assets/brainwave.png";
import image1 from "../assets/growthhub.png";
import image2 from "../assets/crova.png";
export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  const services = [
    {
      id: 0,
      title: "Web Design",
      bgText: "Web Design",
      image: image,
      description:
        "We create modern, responsive websites that engage users and drive results.",
      tags: ["UX/UI Design", "Responsive Layouts", "Web Development"],
    },
    {
      id: 1,
      title: "Brand Design",
      bgText: "Brand Design",
      image:
         image1,
      description:
        "We build bold, cohesive brand identities that leave a lasting impression.",
      tags: ["Visual Identity", "Style Guides", "Brand Strategy"],
    },
    {
      id: 2,
      title: "Logo Design",
      bgText: "Logo Design",
      image:
        image2,
      description:
        "We design clean, memorable logos that capture your brand's essence.",
      tags: ["Logo Marks", "Wordmarks", "Icon Design"],
    },
  ];

  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <div className="relative min-h-screen bg-[#dbdbdb] flex items-center justify-center p-8 overflow-hidden">
      <div className="w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2 text-start mx-5">(Services)</p>
          <h1 className="text-4xl md:text-7xl mb-12 mx-5 font-bold text-black text-justify">
            What we do
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex justify-between items-center border-t border-gray-400 pt-6 md:text-sm text-xs"

        >
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleDotClick(index)}
              className={`transition-colors duration-300 font-bold flex items-center gap-2 ${activeIndex === index
                  ? "text-[#ff4d00]"
                  : "text-gray-600 hover:text-black"
                }`}
            >
              {activeIndex === index && <span>•</span>}
              {service.title}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div
          className="relative z-10 flex items-center justify-center py-12 md:py-16"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
        >
          {/* Service Card */}
          <div className="w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            <div className="rounded-3xl overflow-hidden">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-auto object-cover rounded-3xl transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <p
                  className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed"

                >
                  {services[activeIndex].description}
                </p>
                <div
                  className="flex justify-center gap-3 flex-wrap"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"



                >
                  {services[activeIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 mt-4 text-white text-xs rounded-full"
                      style={{ backgroundColor: "#5c5c5c" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Full-Screen Background Marquee */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
        <div className="relative w-[200%]">
          <div className="flex gap-10 items-center whitespace-nowrap animate-marquee font-bold">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-[#ff4d00] text-[10vw] font-bold">
                    {services[activeIndex].bgText}
                  </span>
                  <span className="text-gray-300 text-[6vw] font-light opacity-10">
                    ×
                  </span>
                  <img
                    src="https://framerusercontent.com/images/7LCWzuhI2N54jKdu359awJ6cKLU.svg"
                    alt=""
                    className="w-[8vw] h-auto opacity-70"
                  />
                </React.Fragment>
              ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#dbdbdb] via-[#dbdbdb]/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#dbdbdb] via-[#dbdbdb]/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 🔹 Animation Styles */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
