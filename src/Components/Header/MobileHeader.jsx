import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import AnimateLogo from "../AnimateLogo";
import useWindowSize from "@rooks/use-window-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

import { navData, navsocials } from "../../assets/data";
import Switcher from "../utils/Switcher";

export const MobileHeader = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const { innerWidth, innerHeight } = useWindowSize();

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.06,
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

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && open) {
        cycleOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && open) {
        cycleOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open, cycleOpen]);

  return (
    <div className=" absolute h-14 z-[80] xs:hidden w-full flex justify-between items-center">
      <Link to="/">
        <div className="  text-4xl ml-4 mt-2 logo  ">
          <AnimateLogo />
        </div>
      </Link>

      <main className="z-[100]">
        <AnimatePresence>
          {open && (
            <motion.aside
              className="z-[100] h-screen bg-white absolute block right-0 top-0  "
              ref={menuRef}
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
                transition: { delay: 0.3, duration: 0.5 },
              }}>
              <button
                className="z-[100] absolute  right-0 top-0"
                onClick={cycleOpen}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="mr-3 mt-5 text-[#190410]  "
                  size="2x"
                />
              </button>

              <motion.div
                className="flex flex-col text-center justify-between text-[#190410] font-bold text-xl w-full mt-20"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}>
                <div className="flex flex-row justify-center gap-2">
                  <Switcher />
                </div>

                {navData?.map((element, i) => (
                  <motion.div
                    className="my-2"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    onClick={cycleOpen}
                    key={i}>
                    <Link to={element.to}>
                      <FontAwesomeIcon icon={element.icon} className="mr-3" />
                      {element.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="my-2"
                  variants={itemVariants}
                  onClick={cycleOpen}
                  whileHover={{ scale: 1.1 }}>
                  <a
                    href="https://drive.google.com/file/d/1bQQQ_rqIWk6bUuuek7hCXSBuCpzEm97a/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileInvoice} className="mr-3" />
                    Resume
                  </a>
                </motion.div>

                {navsocials.map((element, i) => (
                  <motion.div
                    className="my-2"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    onClick={cycleOpen}
                    key={i}>
                    <a href={element.to} target="_blank">
                      <FontAwesomeIcon icon={element.icon} className="mr-3" />
                      {element.name}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            width: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          className="z-[90] sm:hidden self-start "
          onClick={cycleOpen}>
          {!open && (
            <FontAwesomeIcon icon={faBars} className="mr-3 mt-5 " size="2x" />
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};
