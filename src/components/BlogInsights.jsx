import React from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";

export default function BlogInsights() {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 💡 Big Background Title */}
      <div className="absolute top-0 left-0 right-0 text-center pointer-events-none overflow-hidden">
        <h1 className="text-[12vw] md:text-[14vw] font-extrabold text-gray-400 opacity-40 leading-none tracking-tighter select-none font-inter uppercase">
          Blogs
        </h1>
      </div>

      {/* 📰 Blog Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 md:pt-32 lg:pt-40">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-orange-600 text-sm md:text-base font-semibold tracking-wide uppercase mb-3">
            Our Latest Articles
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Insights & Updates
          </h2>
        </div>

        {/* Blog Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 h-auto">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlogClick(blog.id)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* 🖼️ Image Section - Clean & Minimal */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Category Badge - Minimal */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* ✍️ Content Section */}
              <div className="flex flex-col gap-2 px-1">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {blog.description}
                </p>

                {/* Simple Link */}
                <div className="mt-2 inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if no blogs */}
        {blogData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
