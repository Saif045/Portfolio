import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children, color }) => {
  const controls = useAnimationControls();
  const [isplaying, setIsPlaying] = useState(false);

  let colors = ["#ECCE8E", "#DEAC3F"];
  let random_color = colors[Math.floor(Math.random() * colors.length)];

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
      color: random_color,
    });
    setIsPlaying(true);
  };
  

  return (
    <motion.span
      className={`text-[${random_color}]`}
      animate={controls}
      onMouseOver={() => {
        if (!isplaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}>
      {children}
    </motion.span>
  );
};
export default TextSpan;
