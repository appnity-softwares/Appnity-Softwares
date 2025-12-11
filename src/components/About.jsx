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
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#dbdbdb] text-center px-5 py-20 md:py-32">

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
      {/* Buttons Container */}
      <div
        className="mt-10 md:mt-14 w-full max-w-lg mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="
      grid
      grid-cols-2          /* MOBILE → 2 buttons per row */
      sm:grid-cols-3       /* TABLET → 3 per row */
      lg:grid-cols-3       /* DESKTOP → 3 per row (compact like screenshot) */
      gap-4                /* spacing for mobile */
      md:gap-2             /* more spacing tablet+ */
      place-items-center   /* center align buttons */
    "
        >
          <Button name="Branding" icon="fas fa-star" />
          <Button name="Logo" icon="fas fa-globe" />
          <Button name="Website" icon="fas fa-desktop" />

          <Button name="Illustration" icon="fas fa-paint-brush" />
          <Button name="Interface" icon="fas fa-table-cells" />
          <Button name="Strategy" icon="fas fa-lightbulb" />
        </div>
      </div>

    </section>
  );
};

export default About;
