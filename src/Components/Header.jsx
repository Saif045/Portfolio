import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import AnimateLogo from "./AnimateLogo";
import useWindowSize from "@rooks/use-window-size";

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [color, setColor] = useState(false);
  const { innerWidth, innerHeight } = useWindowSize();

  const listenScrollEvent = (event) => {
    if (window.scrollY > 100) {
      return setColor(true);
    } else if (window.scrollY < 100) {
      return setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <motion.div
      animate={{
        backgroundColor: color ? "#270722" : "transparent",
      }}
      className="fixed w-full h-16 z-[100] bg-[#270722]">
      <div className=" sm:hidden w-full flex justify-between items-center">
        <Link to="/">
          <div className="mt-2">
            <AnimateLogo />
          </div>
        </Link>

        <main className="z-[100]">
          <AnimatePresence>
            {open && (
              <motion.aside
                className="z-[100] h-screen bg-white absolute block right-0 top-0  "
                initial={{ width: 0 }}
                animate={{
                  width:
                    Number(innerWidth) < 280
                      ? Number(innerWidth)
                      : Number(innerWidth) > 360
                      ? Number(innerWidth) / 2
                      : Number(innerWidth) / 1.4,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
                }}>
                <motion.div
                  className="flex flex-col text-center text-[#190410] font-bold text-xl w-full mt-20"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    href="https://github.com/Saif045"
                    target="_blank"
                    className="  block"
                    onClick={cycleOpen}>
                    Github
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    href="https://www.linkedin.com/in/saif-osama"
                    target="_blank"
                    className=" my-6  block"
                    onClick={cycleOpen}>
                    Linkedin
                  </motion.a>
                  <motion.div
                    className="block"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}>
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={cycleOpen}>
                      CONTACT
                    </ScrollLink>
                  </motion.div>
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </main>

        <button className="z-[100] sm:hidden self-start " onClick={cycleOpen}>
          {open ? (
            <AiOutlineClose className="mr-3 mt-5 text-[#49350b]" size={30} />
          ) : (
            <FaBars className="mr-3 mt-5 text-[#ECCE8E]" size={30} />
          )}
        </button>
      </div>

      <div className="hidden sm:flex absolute top-0 w-full  justify-between ">
        <Link to="/">
          <div className="">
            <AnimateLogo />
          </div>
        </Link>

        <div className="mt-4">
          <a
            href="https://github.com/Saif045"
            target="_blank"
            className="p-2 m-2  ">
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/saif-osama"
            target="_blank"
            className="p-2 m-2  ">
            Linkedin
          </a>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="pb-4 pt-8 m-2  mr-4 px-3 font-semibold sm:rounded-b-full border-[#ECCE8E] hover:border-[#ecce8eb7] border-b border-x ">
            CONTACT
          </ScrollLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
