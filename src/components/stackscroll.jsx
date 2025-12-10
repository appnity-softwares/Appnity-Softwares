import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img2 from "../assets/brainwavescale.png";
import img3 from "../assets/growthhubscale.png";
import img5 from "../assets/cgsadi.png";

gsap.registerPlugin(ScrollTrigger);

const StickyCardsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // ----------------------------------------------
  // ✨ Smooth Scroll + GSAP Animation
  // ----------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        if (index === cardRefs.current.length - 1) {
          // LAST CARD = no animation
          gsap.set(card, { opacity: 1, scale: 1 });
        } else {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false,
              },
            })
            .set(card, { opacity: 1, scale: 1 })
            .to(card, { rotation: 10, opacity: 0, scale: 0.6 }, 0.4);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ----------------------------------------------
  // ✨ RENDER
  // ----------------------------------------------
  return (
    <section
      ref={sectionRef}
      className="relative bg-[#dbdbdb] overflow-hidden py-14 md:py-24"
    >
 

      {/* Big Title */}
      <div className="flex justify-center items-center h-[18vh] sm:h-[20vh] md:h-[22vh] relative">
        <h1
          className="
            absolute left-1/2 -translate-x-1/2
            text-[18vw] sm:text-[18vw] md:text-[13vw] lg:text-[10vw]
            top-[40%] sm:top-[11%] md:top-[7%]
            font-semibold leading-none
            bg-gradient-to-b from-black/80 via-black/30 to-transparent
            bg-clip-text text-transparent opacity-40
            whitespace-nowrap select-none
          "
        >
          Momentum
        </h1>
      </div>

      {/* ------------------------------------------ */}
      {/* Cards Loop */}
      {/* ------------------------------------------ */}
      <div className="flex flex-col gap-40 py-1">
        {[img3, img2, img5].map((img, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="relative w-auto h-screen flex items-center justify-center"
          >
            {/* BACKGROUND BLUR */}
            <div
              className="
                  absolute inset-0 rounded-3xl overflow-hidden bg-black/60 object-cover
                  h-[120vh]          /* mobile big */
                  sm:h-[130vh]       /* small tablet bigger */
                 md:h-full          /* desktop normal */
                      "
            >
              <img
                src={img}
                alt=""
                className="
                    w-full h-full object-cover scale-110 blur-[25px] opacity-80"
              />

              {/* Left Fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,black_100%)] opacity-20"></div>
            </div>


            {/* -------------------------------------- */}
            {/* 🌆 CARD IMAGE (Mobile, Tablet, Desktop) */}
            {/* -------------------------------------- */}
            <div
              className="
                relative z-10
                w-[92%] h-[42vh]       /* MOBILE */
                sm:w-[80%] sm:h-[72vh] /* TABLET */
                md:w-[30%] md:h-[85vh] /* DESKTOP */
                rounded-[2rem] overflow-hidden shadow-2xl border border-white/10
                mt-30 sm:mt-40 md:mt-0
              "
            >
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="
                  w-full h-full object-cover object-center
                  scale-110 md:scale-100
                "
              />
            </div>

            {/* -------------------------------------- */}
            {/* LEFT TEXT — MOBILE + TABLET */}
            {/* -------------------------------------- */}
            <div
              className="
                absolute top-6 left-0 
                text-white z-20 px-6 w-full 
                flex flex-col gap-3 text-left
                md:hidden
              "
            >
<p
  className="
    text-[10px] sm:text-[12px] md:text-sm
    leading-relaxed sm:leading-normal
    opacity-80

    max-w-[85%] sm:max-w-[70%] md:max-w-[60%]

    sm:text-start        /* Tablet → text-align: start */
    md:pr-[73px]         /* Tablet → padding-right: 73px */
  "
>
  We’ve helped businesses across industries achieve their goals.
  Here are some of our selected works.
</p>


              <p className="text-[11px] tracking-wider opacity-70">
                {String(i + 1).padStart(2, "0")} / 03
              </p>

              <div className="w-[35px] h-[1px] bg-white/40"></div>

              <h3 className="text-4xl sm:text-5xl font-semibold leading-none">
                {i % 2 === 0 ? "Archin" : "VNTNR"}
              </h3>
            </div>

            {/* -------------------------------------- */}
            {/* RIGHT TEXT — MOBILE + TABLET BOTTOM */}
            {/* -------------------------------------- */}
            <div
              className="
                absolute -bottom-16 left-1/2 -translate-x-1/2 
                w-[92%] sm:w-[80%]
                px-4 py-1 rounded-2xl 
                text-white flex flex-col gap-5
               
                md:hidden
              "
            >
              {/* YEAR */}
              <div>
                <p className="text-[11px] text-white/60 tracking-widest">
                  Year
                </p>
                <p className="text-xl font-bold leading-tight mt-1">2025</p>
              </div>

              {/* ROLE */}
              <div>
                <p className="text-[11px] text-white/60 tracking-widest">
                  Role
                </p>
                <p className="text-sm font-medium mt-0.5">Lead Designer</p>
              </div>

              {/* SERVICES */}
              <div>
                <p className="text-[11px] text-white/60 tracking-widest mb-1">
                  Services
                </p>

                <ul className="text-sm leading-relaxed text-white/90 space-y-1">
                  <li>Website Design</li>
                  <li>Product Design</li>
                  <li>Branding</li>
                  <li>Development</li>
                </ul>
              </div>
            </div>

            {/* -------------------------------------- */}
            {/* LEFT / RIGHT — DESKTOP */}
            {/* -------------------------------------- */}
            <div
              className="
                absolute left-[12%] top-1/2 -translate-y-1/2 
                z-20 text-gray-200 max-w-52 
                hidden md:flex flex-col justify-between h-[60vh]
              "
            >
              <p className="text-sm leading-relaxed opacity-80">
                We’ve helped businesses across industries achieve their goals. Here are some of our selected works.
              </p>

              <div className="mt-auto">
                <p className="text-sm tracking-wider opacity-60 mb-2">
                  {String(i + 1).padStart(2, "0")} / 03
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  {i % 2 === 0 ? "GROWTH HUB" : "BRAINWAVE"}
                </h3>
              </div>
            </div>

            <div
              className="
                absolute right-[15%] top-1/2 -translate-y-1/2 
                z-20 hidden md:flex flex-col justify-between h-[60vh]
                text-gray-200
              "
            >
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest">
                  Year
                </p>
                <p className="text-2xl font-bold mt-1">2023</p>
              </div>

              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest">
                  Role
                </p>
                <p className="text-lg font-semibold text-white">
                  Website Designer
                </p>
              </div>

              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest mb-2">
                  Services
                </p>
                <ul className="text-sm leading-relaxed text-white/90 space-y-1">
                  <li>Branding</li>
                  <li>Revamp</li>
                  <li>Development</li>
                  <li>Designing</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyCardsSection;
