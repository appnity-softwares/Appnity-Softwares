import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import ScrollWordReveal from "./effect/ParagraphColorFade";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#dbdbdb] text-center px-5 py-20 md:py-32 mb-20">

      {/* Small orange hello text */}
      <p
        className="text-orange-600 text-2xl md:text-3xl font-normal mb-6 md:mb-8 font-cursive"
        data-aos="fade-right"
      >
        (evolove)
      </p>
 

{/* Animated Main Heading */}
<ScrollWordReveal
  text={
    `We help fast-growing companies build stunning brands and digital products that users love. 
    `
  }
  className="text-[8vw] md:text-3xl lg:text-5xl font-bold leading-tight text-black max-w-4xl font-sans justify-center"
  dataAos="fade-up"
/>


      {/* Buttons Container */}
      <div
        className="mt-10 md:mt-14 w-full max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* First row */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button name="Branding01" icon="fa-solid fa-globe" />
          <Button name="Logo" icon="fas fa-globe" />
          <Button name="Website" icon="fas fa-desktop" />
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Button name="Illustration" icon="fas fa-paint-brush" />
          <Button name="Interface" icon="fas fa-bullseye" />
          <Button name="Strategy" icon="fas fa-lightbulb" />
        </div>
      </div>
    </section>
  );
};

export default About;
