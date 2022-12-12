import React from "react";
import { data } from "../../../assets/data";
import { motion } from "framer-motion";


const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "easeIn",
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "easeIn",
        duration: 0.8,
        opacity: {
          duration: 1.4,
        },
      },
    },
  };

  const borderAnimation = {
    hidden: { opacity: 0 },
    show: {
      
      opacity: 1,
      transition: {
        type: "easeIn",
      },
    
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="pt-20 px-4 sm:w-[calc(100%-5rem)] absolute right-0">
      <p className="flex justify-center text-2xl mb-10">Projects</p>
      <div className="grid grid-cols-auto-fill sm:grid-cols-auto-fill-sm gap-2  justify-items-center  container mx-auto">
        {data.map((site, i) => (
          <motion.div
            variants={item}
            className="border border-[#ECCE8E] relative pb-12"
            key={i}>
            <div>
              <img className="w-full h-full" src={site.img} alt={site.name} />
              <div className="   p-2">
                <h1>{site.name}</h1>
                <p>{site.description}</p>

                <div className="absolute bottom-0 ">
                  <a href={site.live} target="_blank">
                    <button  className="px-4 py-2 bg-transparent border-t border-x border-[#ECCE8E] hover:border-[#ecce8eb7] rounded-t-full">
                      Live
                    </button>
                  </a>
                  <a href={site.code} target="_blank">
                    <button className="px-4 py-2 bg-transparent border-t border-x border-[#ECCE8E] hover:border-[#ecce8eb7] rounded-t-full">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

{/* 
{
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: #ecce8e;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
}
*/}
