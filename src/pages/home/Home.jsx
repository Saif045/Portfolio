import React from "react";
import { motion } from "framer-motion";
import useDarkSide from "../../Components/utils/useDarkSide";
import Shape from "../../Components/Shape";
import { Link } from "react-router-dom";
import TextSpan from "../../Components/TextSpan";

const Home = () => {
  let h1 = "hi i'm Saif".split("");
  let p1 = "Self Taught ".split("");
  let p2 = "Front-End".split("");
  let p3 = "React js Developer".split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const [isDarkTheme] = useDarkSide();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="  flex flex-col md:flex-row sm:justify-center  md:justify-between h-screen   xs:w-[calc(100%-5rem)] xs:absolute xs:right-0">
        <Shape />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="pl-3 lg:pl-10 xl:pl-16 md:-mb-8 m-4 md:m-0  md:h-auto self-center md:order-first text-center md:text-left text-2xl sm:text-3xl lg:text-4xl ">
          {[h1, p1, p2, p3].map((a, i) => (
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
          <Link to="personal-projects">
            <motion.div
              variants={item}
              className={`  ${
                isDarkTheme ? "hero-btn-darkTheme" : "hero-btn-lightTheme"
              }   p-2 xs:p-3 mt-2 xs:mt-3  w-full text-center text-base xs:text-lg sm:text-xl lg:text-2xl `}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Explore My Projects
            </motion.div>{" "}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
