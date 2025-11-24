import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollWordReveal({ text, className = "" }) {
  const words = text.split(" ");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 0.9", "0.9 0.1"]
  });

  return (
    <h1 ref={ref} className={className + " flex flex-wrap gap-2"}>
      {words.map((word, i) => {
        // Har word ka progress alag banate hain
        const start = i / words.length;
        const end = (i + 1) / words.length;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#9ca3af", "#000000"] // light gray → black
        );

        return (
          <motion.span
            key={i}
            style={{ color }}
            className="inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </h1>
  );
}
