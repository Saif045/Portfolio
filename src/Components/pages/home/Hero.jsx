import React from "react";
import TextSpan from "../../utils/TextSpan";
import Bg from "../../utils/Bg";
import { motion } from "framer-motion";

const Hero = () => {
  let h1 = "hi i'm Saif".split("");
  let p1 = "Front-End".split("");
  let p2 = "Web Developer".split("");
  let p3 = "React js Enthusiast".split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <div className="  flex flex-col md:flex-row sm:justify-center  md:justify-between h-screen  sm:w-[calc(100vw-5.8rem)] lg:w-[calc(100vw-7rem)] sm:absolute sm:right-0 ">
      <Bg />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" md:-mb-8 m-4 md:m-0  md:h-auto self-center md:order-first text-center md:text-left text-2xl sm:text-3xl lg:text-4xl ">
        {[h1, p1, p2, p3].map((a, i) => (
          <div key={i}>
            {a === " "
              ? "\u00A0"
              : a.map((char, b) => (
                  <motion.span variants={item} key={b}>
                    <TextSpan char={char} />
                  </motion.span>
                ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
{
  /* {letter === " " ? "\u00A0" :  letter }*/
}
