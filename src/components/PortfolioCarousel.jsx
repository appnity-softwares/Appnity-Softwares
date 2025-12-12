import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "../data/portfolioData";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

export default function PortfolioCarousel() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolio);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const categories = ["All", ...new Set(portfolio.map(item => item.category))];

  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? portfolio
        : portfolio.filter((item) => item.category === activeCategory);

    setFilteredProjects(filtered);
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-scroll
  useEffect(() => {
    if (isHovered || filteredProjects.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [filteredProjects, isHovered]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);

  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );

  const currentProject = filteredProjects[activeIndex];
  if (!currentProject) return null;

  return (
    <div className="relative min-h-screen bg-neutral-950 flex flex-col items-center justify-center py-14 sm:py-20 px-3 sm:px-6 md:px-8 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[50%] bg-orange-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[50%] bg-blue-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-orange-500 font-medium tracking-wider text-xs sm:text-sm uppercase mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-snug">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Works.
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-14 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 relative overflow-hidden group 
                ${activeCategory === cat
                  ? "text-white"
                  : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-orange-600 rounded-full -z-10"
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="w-full relative flex items-center justify-center gap-4 sm:gap-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden md:flex p-3 rounded-full bg-white/5 hover:bg-orange-600 text-white transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Card */}
          <div className="w-full max-w-5xl h-[430px] sm:h-[520px] md:h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl"
              >
                {/* Image */}
                <div className="w-full md:w-[55%] h-[50%] sm:h-[55%] md:h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold rounded-lg uppercase tracking-wider">
                      {currentProject.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[45%] p-5 sm:p-7 md:p-10 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    {currentProject.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 line-clamp-4">
                    {currentProject.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 sm:px-3 bg-white/5 border border-white/10 rounded-md text-[10px] sm:text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 sm:gap-4">
          <a
  href={currentProject.projectUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-orange-600/25"
>
  View Project <ExternalLink size={16} />
</a>


                    <button className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden md:flex p-3 rounded-full bg-white/5 hover:bg-orange-600 text-white transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-10">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 
                ${idx === activeIndex
                  ? "w-7 sm:w-8 bg-orange-500"
                  : "w-1.5 bg-gray-600 hover:bg-gray-500"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
