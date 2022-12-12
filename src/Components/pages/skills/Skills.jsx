import React from "react";
import { skills, list } from "../../utils/skills";
import { motion } from "framer-motion";

const item = {
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "easeIn", duration: 0.8 },
  },
};

const Skills = () => {
  return (
    <div className="  xs:w-[calc(100vw-5rem)] xs:absolute xs:right-0  pt-14  ">
      <div className="container mx-auto px-2 grid h-[80vh]  ">
        <motion.div
          variants={item}
          initial={{ x: -10, opacity: 0 }}
          animate="show"
          className="sm:w-1/2 lg:w-1/3 m-4 self-center  ">
          <div>
            <h1 className="text-xl mb-2 ">Skills</h1>
            <p>{skills.join(" , ")}</p>
          </div>
          <div>
            <h1 className="text-lg mt-2 my-1 ">Currently learning</h1>
            <p>{list.join(" , ")}</p>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          initial={{ x: 10, opacity: 0 }}
          animate="show"
          className="sm:w-1/2 lg:w-1/3 m-4 self-center text-end justify-self-end ">
          <div>
            <p>
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time. I guarantee a commitment during
              work on your project.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
