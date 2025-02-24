import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import LoginComponent from "./LoginComponent";
import AnimatedWord from "./AnimatedWord";

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

function AnimatedLoginBg() {
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
    >
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {/* Text Section (Hidden on small and medium screens) */}
        <div
          className="hidden lg:flex flex-col justify-center items-start p-12 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            maxWidth: "800px",
            margin: "auto", // Center the container
          }}
        >
          <div className="max-w-2xl relative">
            <h1 className="text-blue-950 text-4xl font-bold mb-4">
              Unlock Your Potential
            </h1>
            <h2 className="text-3xl font-semibold text-blue-950 mb-6">
              Get Placed and Build Your Resume
            </h2>
            <div className="flex">
              <p className="text-xl font-semibold text-blue-950 py-1.5">
                Ready to be
              </p>
              <AnimatedWord></AnimatedWord>
            </div>
            <p className="text-blue-950 font-semibold py-3">
              Our platform empowers students to craft standout resumes and
              connect with top companies for placements. Whether you want to be
              faster, be smarter, or simply be prepared, we’ve got the tools to
              help you succeed. Start your journey today!
            </p>
          </div>
        </div>

        {/* Login Page Section */}
        <div className="flex justify-center items-center lg:justify-end">
          <LoginComponent />
        </div>
      </div>
    </motion.section>
  );
}

export default AnimatedLoginBg;
