import React from "react";
import TextSpan from "./TextSpan";
import Bg from "./utils/Bg";
import { motion } from "framer-motion";

const Hero = () => {
  let h1 = "hi i'm Saif".split("");
  let p1 = "Front-End".split("");
  let p2 = "Web Developer".split("");
  let p3 = "React js Enthusiast".split("");

  return (
    <div className="flex flex-col sm:flex-row justify-between h-screen ">
      <div className=" mt-8 m-4 -mb-4 sm:self-center bg-black bg-opacity-60  text-3xl ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}>
          {h1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          {p1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}>
          {" "}
          {p2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          {p3.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </motion.p>
      </div>
      <Bg />
    </div>
  );
};

export default Hero;

{
  /*
 {letter === " " ? "\u00A0" :  letter }
*/
}
