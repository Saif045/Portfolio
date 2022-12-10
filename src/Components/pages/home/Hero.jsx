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
        staggerChildren: 1.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2.5 } },
  };

  return (
    <div className="  flex flex-col md:flex-row sm:justify-center  md:justify-between h-screen  sm:w-[calc(100vw-5.8rem)] lg:w-[calc(100vw-7rem)] sm:absolute sm:right-0 ">
      <Bg />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" md:-mb-8 m-4 md:m-0  md:h-auto self-center md:order-first text-center md:text-left text-2xl sm:text-3xl lg:text-4xl ">
        <motion.h1 variants={item}>
          {h1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.h1>
        <motion.p variants={item}>
          {p1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.p>
        <motion.p variants={item}>
          {" "}
          {p2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.p>
        <motion.p variants={item}>
          {p3.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;

{
  /*
 {letter === " " ? "\u00A0" :  letter }
*/
}
