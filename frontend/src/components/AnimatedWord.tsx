import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordList = ["Better.", "Faster.", "Smarter.", "Focused.", "Placed."];

function AnimatedWord() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === wordList.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2">
      <AnimatePresence mode="wait">
        <motion.div
          className="text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          key={currentWordIndex} // Key change triggers animation
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }} // Faster animation duration
        >
          {wordList[currentWordIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedWord;
