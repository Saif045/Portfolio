import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children, fullwidth }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isOpen
      ) {
        onClose(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed top-0 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-25 bg-black z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="
              fixed 
              inset-0 
              bg-black
            "
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={` bg-white p-10 rounded-lg  z-[150] relative h-auto w-full ${
                !fullwidth && "max-w-[75%]"
              }`}
              ref={modalRef}>
              <Close onClose={onClose} />
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;

const Close = ({ onClose }) => {
  return (
    <button
      type="button"
      className="
     absolute top-1 right-1
       rounded-md 
       bg-white 
       text-gray-700 
       hover:text-gray-900 
       focus:outline-none 
       focus:ring-2 
       focus:ring-indigo-500 
       focus:ring-offset-2
     "
      onClick={onClose}>
      <span className="sr-only">Close</span>
      <IoClose className="h-10 w-10" aria-hidden="true" />
    </button>
  );
};
