import React from "react";
import TextSpan from "../../utils/TextSpan";
import Bg from "../../utils/Bg";
import { motion } from "framer-motion";

const Hero = () => {
  let h1 = "hi i'm Saif".split("");
  let p1 = "Self Taught ".split("");
  let p2 = "Front-End".split("");
  let p3 = "React js Developer".split("");
  

  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="  flex flex-col md:flex-row sm:justify-center  md:justify-between h-screen   xs:w-[calc(100%-5rem)] xs:absolute xs:right-0">
      <Bg />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="pl-3 lg:pl-10 xl:pl-16 md:-mb-8 m-4 md:m-0  md:h-auto self-center md:order-first text-center md:text-left text-2xl sm:text-3xl lg:text-4xl ">
        {[h1, p1, p2, p3 ].map((a, i) => (
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
        <a className="hero-btn p-2 xs:p-3 mt-2 xs:mt-3  w-full text-center text-base xs:text-lg sm:text-xl lg:text-2xl " href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Explore My Projects.
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
{
  /* {letter === " " ? "\u00A0" :  letter }*/
}
