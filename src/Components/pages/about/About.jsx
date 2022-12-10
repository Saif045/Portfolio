import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const item = {
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "easeIn", duration: 0.8 },
    },
  };

  return (
    <div className=" sm:w-[calc(100vw-5rem)] sm:absolute sm:right-0 pt-14  ">
      <div className="container mx-auto px-2 grid h-[80vh]  ">
        <motion.div
          variants={item}
          initial={{ x: 10, opacity: 0 }}
          animate="show"
          className="sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 self-center justify-self-end text-end">
          <h1 className="text-xl mb-2">About Me</h1>
          <p>
            A passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact. Interested in Remote Work
          </p>
        </motion.div>
        <motion.div
          variants={item}
          initial={{ x: -10, opacity: 0 }}
          animate="show"
          className="sm:w-2/3 md:w-1/2 lg:w-1/3 m-4 self-center  ">
          <div>
            <h1 className="text-xl mb-2 ">Skills</h1>
            <p>
              {" "}
              A passionate individual who always thrive to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact. Interested in Remote Work
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
