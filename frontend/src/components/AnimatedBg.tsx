import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const ColorList = [
  "#36454F",
  "#708090",
  "#2C3539",
  "#483C32",
  "#2F4F4F",
  "#2C3E50",
  "#3C4F41",
  "#B2BEB5",
  "#4F5D75",
  "#100C08",
];

function AnimatedBg() {
  const color = useMotionValue(ColorList[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 70% 70%, white 10%,${color})`;

  useEffect(() => {
    animate(color, ColorList, {
      ease: "easeInOut",
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{
        backgroundImage: backgroundImage,
      }}
      className="relative min-h-screen min-w-screen overflow-hidden flex justify-center items-center"
    ></motion.section>
  );
}

export default AnimatedBg;
