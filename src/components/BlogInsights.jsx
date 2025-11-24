import React from "react";

export default function BlogInsights() {
  const blogs = [
    {
      id: 1,
      image:
        "https://framerusercontent.com/images/AWhJGkoO1R4OjT86q2SUa6hQtyg.png",
      title: "Bridging Design & Development",
      description: "Clean UI into seamless code",
      readTime: "2 Min Read",
    },
    {
      id: 2,
      image:
        "https://framerusercontent.com/images/chp7C8iulZpS7COcG0vizKTBw1k.png?scale-down-to=1024",
      title: "High-Performance Website",
      description: "Principles dev should build with",
      readTime: "3 Min Read",
    },
    {
      id: 3,
      image:
        "https://framerusercontent.com/images/2g1ervfFGOFw7M9o9qPv7ognLs.png",
      title: "Design That Converts",
      description: "Strategic visuals drive results",
      readTime: "2 Min Read",
    },
     {
      id: 4,
      image:
        "https://framerusercontent.com/images/agh1fOKB68bmz5i7jTuchksYqs.png?scale-down-to=1024",
      title: "Design That Converts",
      description: "Strategic visuals drive results",
      readTime: "2 Min Read",
    },
     {
      id: 5,
      image:
        "	https://framerusercontent.com/images/xaT5BrnsTobFUhkTLPEae7z2gc4.png?scale-down-to=1024",
      title: "Design That Converts",
      description: "Strategic visuals drive results",
      readTime: "2 Min Read",
    },
     {
      id: 6,
      image:
        "https://framerusercontent.com/images/6q3AkgZ10FtoWjmSoY6KZKf8tn0.png?scale-down-to=1024",
      title: "Design That Converts",
      description: "Strategic visuals drive results",
      readTime: "2 Min Read",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 relative overflow-hidden">
      {/* 💡 Big Background Title */}
      <div className="absolute top-0 left-0 right-0 text-center pointer-events-none">
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-gray-300 opacity-20 leading-none tracking-tighter select-none">
          Blog Insights
        </h1>
      </div>

      {/* 📰 Blog Cards Grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto pt-24 md:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              // className="group cursor-pointer bg-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              className=""
            >
              {/* 🖼️ Image Section */}
              <div className="relative w-full h-[340px] md:h-[400px] lg:h-[540px] rounded-3xl overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* 🕒 Read Time Badge (overlay) */}
                
              </div>

              {/* ✍️ Content Section */}
              <div className="p-6 flex flex-col justify-between   rounded-xl flex-grow">
                <div >
                  <h3 className="text-xl font-semibold text-gray-900 mb-0 group-hover:text-indigo-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.description}
                  </p>
                  <span className="relative -right-56 ml-16  bottom-8 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {blog.readTime}
                </span>
                </div>

                {/* 🔗 Read More Button */}
                {/* <button className="mt-1 self-start text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                  Read More →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
