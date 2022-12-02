import React from "react";
import TextSpan from "./TextSpan";
import Bg from "./utils/Bg";
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
    show: { opacity: 1  , transition: { duration: 2.5 }},
   
  };

  return (
    <div className="  flex flex-col sm:flex-row  sm:justify-between h-screen ">
      <Bg />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-20 sm:mt-4 m-4  sm:h-auto self-center sm:order-first text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl ">
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
