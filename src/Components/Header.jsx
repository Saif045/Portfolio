import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import AnimateLogo from "./AnimateLogo";
import useWindowSize from "@rooks/use-window-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faGear,
  faFileInvoice,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";
import Switcher from "./utils/Switcher";
import useDarkSide from "./utils/useDarkSide";

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [color, setColor] = useState(false);
  const { innerWidth, innerHeight } = useWindowSize();

  let navsocials = [
    { to: "https://github.com/Saif045", name: "Github", icon: faGithub },
    {
      to: "https://www.linkedin.com/in/saif-osama",
      name: "Linkedin",
      icon: faLinkedin,
    },
  ];
  <FontAwesomeIcon icon="fa-sharp fa-solid fa-file-invoice" />;

  let navData = [
    { to: "/", name: "Home", icon: faHome },
    { to: "/contact", name: "Contact", icon: faEnvelope },
    { to: "/about", name: "About", icon: faUser },
    {
      to: "/personal-projects",
      name: "Personal Projects",
      icon: faSuitcase,
    },
    {
      to: "/freelance-projects",
      name: "Freelance Projects",
      icon: faBusinessTime,
    },
    { to: "/skills", name: "Skills", icon: faGear },
  ];

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

  const [isDarkTheme] = useDarkSide();


  return (
    <div className="">
      {/* mobile  */}
      <div className=" absolute h-14 z-[80] xs:hidden w-full flex justify-between items-center">
        <Link to="/">
          <div className="  text-4xl ml-4 mt-2 logo text-[#ECCE8E] ">
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
                  transition: { delay: 0.3, duration: 0.5 },
                }}>
                <motion.div
                  className="flex flex-col text-center justify-between text-[#190410] font-bold text-xl w-full mt-20"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}>
                  {navData.map((element, i) => (
                    <motion.div
                      className="my-2"
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={cycleOpen}
                      key={i}>
                      <Link to={element.to}>
                        <FontAwesomeIcon
                          icon={element.icon}
                          color="#4d4d4e"
                          className="mr-3"
                        />
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
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        color="#4d4d4e"
                        className="mr-3"
                      />
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
                        <FontAwesomeIcon
                          icon={element.icon}
                          color="#4d4d4e"
                          className="mr-3"
                        />
                        {element.name}
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </main>
        <button className="z-[100] sm:hidden self-start " onClick={cycleOpen}>
          {open ? (
            <FontAwesomeIcon
              icon={faClose}
              className="mr-3 mt-5 text-[#49350b]"
              size="2x"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="mr-3 mt-5 text-[#ECCE8E]"
              size="2x"
            />
          )}
        </button>
      </div>

      {/* Desktop  */}

      <div className="hidden xs:flex flex-col fixed top-0 left-0 w-20 h-screen text-center border-r  border-[#270722] dark:border-[#ECCE8E]">
        <Link to="/">
          <div className=" mb-8 text-4xl  mt-2 logo text-[#270722] dark:text-[#ECCE8E]">
            <AnimateLogo />
          </div>
        </Link>

        {navData.map((element, i) => (
          <Link to={element.to} key={i}>
            <div className=" mb-4">
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

        <a
        className="mb-4"
          href="https://drive.google.com/file/d/1bQQQ_rqIWk6bUuuek7hCXSBuCpzEm97a/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.3 }}>
            <FontAwesomeIcon icon={faFileInvoice}   color={isDarkTheme ? "#ecce8e" : "#270722"} size="xl" />
          </motion.div>
          <p className="text-sm"> Resume</p>
        </a>
        <Switcher />

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
    </div>
  );
};

export default Header;

{
  /* <DarkModeSwitch
        className="self-center my-2"
        moonColor="#ecce8e"
        sunColor="#270722"
        style={{ marginBottom: "2rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      /> */
}
