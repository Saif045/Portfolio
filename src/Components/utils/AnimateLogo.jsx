import React from "react";
import { motion } from "framer-motion";

const AnimateLogo = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {["S", "a", "i", "f"].map((a, b) => (
        <motion.span variants={item} key={b}> {a} </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateLogo;
