import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const ImgModal = ({ imgSrc, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="">
        <motion.img
          whileHover={{ scale: 1.5, zIndex: 100 }}
          transition={{
            type: "easeIn",
          }}
          style={{ position: "relative" }}
          className="w-full h-full"
          src={imgSrc}
          alt={name}
        />
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullwidth>
        <img
          style={{ position: "relative" }}
          className="w-full h-full"
          src={imgSrc}
          alt={name}
        />
      </Modal>
    </>
  );
};

export default ImgModal;
