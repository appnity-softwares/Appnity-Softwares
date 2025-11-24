import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceCardTemplate() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,       // 🔥 Animation runs ONLY on scroll down!
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#dbdbdb] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* -------------------- CARD 1 -------------------- */}
        <div className="mt-10">
          <div className="border-t border-gray-400 mb-6"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-2 mb-28">
              <h2 className="text-2xl md:text-xl font-medium text-gray-700">
                Brand Design
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
                  src="https://framerusercontent.com/images/EBtg3SqsQjHY12Y56g88GlQL89c.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="  fade-once text-gray-600 leading-relaxed mb-48 text-lg" >
                From logo to language, we shape your best identity. Strategic
                brand systems that tell your story and stand strong.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-60">
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              UX/UI Design
            </span>
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Responsive Layouts
            </span>
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Web Development
            </span>
          </div>
        </div>

        {/* -------------------- CARD 2 -------------------- */}
        <div className="mt-10">
          <div className="border-t border-gray-400 mb-6"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-2 mb-28">
              <h2 className="text-2xl md:text-xl font-medium text-gray-700">
                Brand Design
              </h2>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh]" data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="600"
              >
                <img
                  src="https://framerusercontent.com/images/L3jNOIvjVNNJ9KYGN7ZewlhM4.png?scale-down-to=1024"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="  fade-once text-gray-600 leading-relaxed mb-48 text-lg" >
                From logo to language, we shape your best identity. Strategic
                brand systems that tell your story and stand strong.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-60 " data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              UX/UI Design
            </span>
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Responsive Layouts
            </span>
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Web Development
            </span>
          </div>
        </div>

        {/* -------------------- CARD 3 -------------------- */}
        <div className="mt-10">
          <div className="border-t border-gray-400 mb-6"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-2 mb-28">
              <h2 className="text-2xl md:text-xl font-medium text-gray-700">
                Logo Design
              </h2>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-black h-[50vh]" data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="600"
              >
                <img
                  src="https://framerusercontent.com/images/eKy5vm5RJn0lbHSDCifL8K7vfg.png?scale-down-to=1024"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="  fade-once text-gray-600 leading-relaxed mb-48 text-lg" >
                Every brand deserves a signature mark. We craft logos that are
                bold and clear. Let your brand speak without saying a word.
              </p>
            </div>
          </div>

          {/* Tags */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap -ml-60 " data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              UX/UI Design
            </span>
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Responsive Layouts
            </span>
            <span className="px-3 py-2.5 bg-gray-700 text-white text-xs rounded-full">
              Web Development
            </span>
          </div>
        </div>

      </div>
      {/* FIXED BLINK CSS */}
<style jsx>{`
  .fade-once {
    opacity: 0;
    animation: fadeIn 2s ease-out forwards;
  }

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`}</style>

    </div>


  );
}
