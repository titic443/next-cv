"use client";
import { motion } from "framer-motion";

function TestPage() {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className="h-full  flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-cyan-500"
        variants={variants}
        animate={variants.variant1}
      ></motion.div>
    </div>
  );
}

export default TestPage;
