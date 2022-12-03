import React from "react";
import { skills, list } from "./utils/skills";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "easeIn", duration: 1.2 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="h-[calc(100vh-6rem)] container mx-auto grid  my-20">
      <motion.div
        variants={item}
        viewport={{ once: true, amount: 1 }}
        className="sm:w-1/2 lg:w-1/3 m-4 self-center ">
        <h1 className="text-xl mb-2">About Me</h1>
        <p>
          A passionate individual who always thrive to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        viewport={{ once: true, amount: 1 }}
        className="sm:w-1/2 lg:w-1/3 m-4 self-center text-end justify-self-end ">
        <div>
          <h1 className="text-xl mb-2 ">Skills</h1>
          <p>{skills.join(" , ")}</p>
        </div>
        <div>
          <h1 className="text-lg mt-2 my-1 ">Currently learning</h1>
          <p>{list.join(" , ")}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
