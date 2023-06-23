import React from "react";
import { motion } from "framer-motion";
import VideoModal from "../../Components/Modals/VideoModal";
import ImgModal from "../../Components/Modals/ImgModal";
import { HalfRoundedBtn } from "../../Components/HalfRoundedBtn";

const Projects = ({ data }) => {
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="sm:mt-20 pt-4  px-4  xs:w-[calc(100%-5rem)] xs:absolute xs:right-0 overflow-x-hidden">
      <p className="flex justify-center text-2xl ">Projects</p>
      <div className="grid grid-cols-auto-fill sm:grid-cols-auto-fill-sm gap-2  justify-items-center  container mx-auto   py-12">
        {data?.map((site, i) => (
          <motion.div
            variants={item}
            className="border  border-[#270722] dark:border-[#ECCE8E] relative pb-10"
            key={i}>
            <div>
              <ImgModal imgSrc={site.img} name={site.name} />

              <div className="   p-2">
                <h1>{site.name}</h1>
                <span>{site.description}</span>

                <div className="absolute bottom-0 ">
                  {site.live && (
                    <a href={site.live} target="_blank">
                      <HalfRoundedBtn label="Live" />
                    </a>
                  )}
                  {site.code && (
                    <a href={site.code} target="_blank">
                      <HalfRoundedBtn label="Code" />
                    </a>
                  )}
                  {site?.video && <VideoModal video={site.video} />}
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

{
  /* 
{
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: #ecce8e;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
}
*/
}
