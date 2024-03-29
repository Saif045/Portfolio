import React from "react";
import { motion } from "framer-motion";
import { first, second } from "../../assets/data";

const About = () => {
  const item = {
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "easeIn", duration: 0.8 },
    },
  };

  return (
    <div className=" overflow-hidden xs:w-[calc(100%-5rem)] xs:absolute xs:right-0 pt-14  ">
      <div className="container mx-auto px-2 grid h-[80vh]  ">
        <motion.div
          variants={item}
          initial={{ x: -10, opacity: 0 }}
          animate="show"
          className=" my-10 sm:my-auto sm:w-2/3  lg:w-1/2 p-4 self-center  ">
          <h1 className="text-xl mb-2">About Me</h1>
          <p>{first}</p>
        </motion.div>
        <motion.div
          variants={item}
          initial={{ x: 10, opacity: 0 }}
          animate="show"
          className="pb-10 sm:pb-10 sm:w-2/3  lg:w-1/2 m-4 self-center  justify-self-end text-end ">
          <div>
            <p>{second}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
