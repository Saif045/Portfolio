import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useState } from "react";
import useDarkSide from "./utils/useDarkSide";

const TextSpan = ({ char }) => {
  const controls = useAnimationControls();
  const [isplaying, setIsPlaying] = useState(false);
  const [isDarkTheme] = useDarkSide();

  const rubberBand = useCallback(() => {
    controls.start({
      transform: [
        "scale(1, 1)",
        "scale(1.4, .55)",
        "scale(.75, 1.25)",
        "scale(1.25, .85)",
        "scale(.9, 1.05)",
        "scale(1, 1)",
      ],
      opacity:"0.7"
    });
    setIsPlaying(true);
  }, [controls, isDarkTheme]);

  return (
    <motion.span
      className=" "
      animate={controls}
      onMouseOver={() => {
        if (!isplaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};
export default TextSpan;
