
import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolio } from "../data/portfolioData";

export default function PortfolioTemplate() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,      
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-[#dbdbdb] py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {portfolio.map((project, index) => (
            <div className="mb-20" key={project.id}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div data-aos="fade-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base mb-5">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                    <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 flex justify-center">
                        <div
                            className="relative rounded-xl overflow-hidden shadow-xl"
                            data-aos="fade-left"
                            data-aos-duration="600"
                        >
                            <img
                                src={project.imageUrl}
                                className="w-full h-full object-cover"
                                alt={project.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
