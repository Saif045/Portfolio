import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zc10ydk",
        "template_w58nqzb",
        form.current,
        "fvHAVGH5cph6P-EK4"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
    e.target.reset();
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "easeIn",

        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

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
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="text-[#270722]  body-font relative xs:w-[calc(100%-5rem)] xs:absolute xs:right-0 "
      id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container px-5 pt-20 sm:pt-14  mx-auto">
          <div className="flex flex-col text-center w-full mb-4 justify-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-[#ECCE8E] ">
              Contact Me
            </h1>
            <p className="text-sm text-[#ECCE8E] sm:w-3/4 self-center  ">
              i am interested in remote opportunities and creative projects that
              can push me to the limit
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <motion.div variants={item} className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-[#ECCE8E]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#E5DDB3] rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </motion.div>
              <div className="p-2 w-1/2">
                <motion.div variants={item} className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-[#ECCE8E]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#E5DDB3] rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </motion.div>
              </div>
              <div className="p-2 w-full">
                <motion.div variants={item} className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-[#ECCE8E]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-[#E5DDB3] rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </motion.div>
              </div>
              <motion.div variants={item} className="p-2 w-full">
                <button className="flex mx-auto text-[#270722] bg-[#DCA42E] border-0 py-2 px-8 focus:outline-none hover:bg-[#C2C6A7] rounded text-lg">
                  Button
                </button>
              </motion.div>

              <div className="flex flex-col w-full text-center">
                <motion.div
                  variants={item}
                  className="p-2 w-[80%] self-center mt-4 border-t border-[#ECCE8E]"></motion.div>
                <motion.div variants={item} className="py-4">
                  <a className=" text-[#ECCE8E]">saif.x45@gmail.com</a>
                </motion.div>

                <span className="inline-flex self-center">
                  <a
                    className="ml-4 "
                    href="https://github.com/Saif045"
                    target="_blank">
                    <motion.svg
                      variants={item}
                      className="fill-[#ECCE8E]"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 64 64">
                      <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                    </motion.svg>
                  </a>
                  <a
                    className="ml-4 "
                    href="https://www.linkedin.com/in/saif-osama"
                    target="_blank">
                    <motion.svg
                      variants={item}
                      className="fill-[#ECCE8E]"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </motion.svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
