import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isplaying, setIsPlaying] = useState(false);

  const getRandomColor = () => {
    let colors = ["#ECCE8E", "#DEAC3F"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale(1, 1)",
        "scale(1.4, .55)",
        "scale(.75, 1.25)",
        "scale(1.25, .85)",
        "scale(.9, 1.05)",
        "scale(1, 1)",
      ],
      color: getRandomColor(),
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isplaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      style={{ color: getRandomColor() }}>
      {children}
    </motion.span>
  );
};
export default TextSpan;
