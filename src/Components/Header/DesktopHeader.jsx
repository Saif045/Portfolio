import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateLogo from "../AnimateLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import Switcher from "../utils/Switcher";
import { navData, navsocials } from "../../assets/data";
import useDarkSide from "../utils/useDarkSide";
export const DesktopHeader = () => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const [isDarkTheme] = useDarkSide();

  return (
    <div className="hidden xs:flex flex-col fixed top-0 left-0 w-20 h-screen text-center border-r  border-[#270722] dark:border-[#ECCE8E]">
      <Link to="/">
        <div className=" mb-4 text-4xl  mt-2 logo text-[#270722] dark:text-[#ECCE8E]">
          <AnimateLogo />
        </div>
      </Link>

      {navData.map((element, i) => (
        <Link to={element.to} key={i}>
          <div className=" mb-2">
            <motion.div whileHover={{ scale: 1.3 }}>
              <FontAwesomeIcon
                icon={element.icon}
                color={isDarkTheme ? "#ecce8e" : "#270722"}
                size="xl"
              />
            </motion.div>
            <motion.p className="text-sm">{element.name}</motion.p>
          </div>
        </Link>
      ))}

      <a className="mb-2" href="/resume">
        <motion.div whileHover={{ scale: 1.3 }}>
          <FontAwesomeIcon
            icon={faFileInvoice}
            color={isDarkTheme ? "#ecce8e" : "#270722"}
            size="xl"
          />
        </motion.div>
        <p className="text-sm"> Resume</p>
      </a>
      <div className="flex flex-col  items-center w-full ">
        <Switcher />
      </div>

      <div className="absolute bottom-2 flex self-center gap-3">
        {navsocials.map((element, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3 }}
            variants={itemVariants}>
            <a href={element.to} target="_blank">
              <FontAwesomeIcon
                icon={element.icon}
                color={isDarkTheme ? "#ecce8e" : "#270722"}
                size="xl"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
