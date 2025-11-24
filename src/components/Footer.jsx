import React from "react";
import third from "../assets/third3.png";
export default function AgeroFooter() {
  let today = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
  return (
    <div className="min-h-screen p-4 bg-[#dbdbdb]">
      <footer className="relative min-h-screen overflow-hidden rounded-3xl">

        {/* ✅ Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/PdDBhDZBbpUwCIAstL4W9sLO5M.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(1.3)",
          }}
        ></div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 h-full w-full flex flex-col justify-between text-white">

          {/* 🔸 TOP SECTION */}
          <div className="w-full px-6 sm:px-10 md:px-16 lg:px-44 py-10 sm:py-14 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-1 text-left">

              {/* Navigation */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-3 tracking-wider">Navigation</h3>
                <ul className="space-y-2 text-2xl sm:text-2xl font-bold py-3">
                  <li><a href="#about" className="text-white hover:text-orange-400">About</a></li>
                  <li><a href="#works" className="text-white hover:text-orange-400">Works</a></li>
                  <li><a href="#services" className="text-white hover:text-orange-400">Services</a></li>
                  <li><a href="#blog" className="text-white hover:text-orange-400">Blog</a></li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-3 tracking-wider">Social</h3>
                <ul className="space-y-2 text-2xl sm:text-2xl font-bold py-3">
                  <li><a href="#twitter" className="text-white hover:text-orange-400">Twitter (X)</a></li>
                  <li><a href="#linkedin" className="text-white hover:text-orange-400">LinkedIn</a></li>
                  <li><a href="#dribbble" className="text-white hover:text-orange-400">Dribbble</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase mb-3 tracking-wider">Legals</h3>
                <ul className="space-y-2 text-2xl sm:text-2xl font-bold py-3">
                  <li><a href="#privacy" className="text-white hover:text-orange-400">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-white hover:text-orange-400">Terms of Service</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* 🔸 Bottom Section */}
          <div className="relative flex flex-col items-center pb-40 sm:pb-52 md:pb-60">

            {/* Glow Background */}
 

            {/* Bottom Info */}
            <div className="w-full px-4">
              <div className="
                max-w-6xl mx-auto 
                flex flex-col sm:flex-row 
                justify-between items-baseline
                text-gray-400 text-sm gap-4
                mb-40 sm:mb-60 text-center sm:text-left lg:items-baseline
              ">
                <p className="flex-1">© 2025 Appnity. All rights reserved.</p>
                <p className="flex-1">India — {today}</p> 
                <a href="#head" className="flex-1 text-orange-400 hover:text-orange-300  lg:[pl-32]">
                  Back to top
                </a>
              </div>
            </div>

            {/* Logo */}
<div className="absolute inset-0 flex justify-center items-end z-10 mb-4 sm:mb-1 md:mb-28 lg:mb-0">
  <img
    src={third}
    alt="appnity Logo"
    className="
      w-[95%]
      sm:w-[70%]
      md:w-[75%]
      lg:w-[100%]
      lg:h-[50%]
      object-cover
      rounded-3xl
    "
  />

  {/* Blurry bottom fade */}
  <div className="backdrop-blur-sm absolute bottom-0 left-0 h-5 sm:h-12 md:h-20 lg:h-20 w-full mb-1 sm:mb-1 md:mb-6 lg:mb-0"></div>
</div>



          </div>

        </div>
      </footer>
    </div>
  );
}
