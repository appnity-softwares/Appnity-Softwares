import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolio } from "../data/portfolioData";

export default function PortfolioItem() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#dbdbdb] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {portfolio.map((project) => (
          <div className="mt-10" key={project.id}>
            <div className="border-t border-gray-400 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-2 mb-28">
                <h2 className="text-2xl md:text-xl font-medium text-gray-700">
                  {project.title}
                </h2>
              </div>
              <div className="lg:col-span-6 flex justify-center">
                <div
                  className="relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh]"
                  data-aos="fade-left"
                  data-aos-offset="500"
                  data-aos-duration="600"
                >
                  <img
                    src={project.imageUrl}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <p className="fade-once text-gray-600 leading-relaxed mb-48 text-lg">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-60">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .fade-once {
          opacity: 0;
          animation: fadeIn 2s ease-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
