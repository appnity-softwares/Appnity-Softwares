import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlurText({
  text = "",
  animateBy = "words",
  className = "",
  direction = "top",
}) {
  const items = animateBy === "words" ? text.split(" ") : text.split("");

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  const child = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: direction === "top" ? -20 : 20
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const container = {
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <motion.p
      ref={ref}
      className={"flex flex-wrap " + className}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {items.map((t, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {t}
          {animateBy === "words" ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}
