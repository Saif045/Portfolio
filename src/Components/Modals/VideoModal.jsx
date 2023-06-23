import { useState } from "react";
import { HalfRoundedBtn } from "../HalfRoundedBtn";
import Modal from "./Modal";

const VideoModal = ({ video }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HalfRoundedBtn onClick={() => setIsModalOpen(true)} label="video" />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {video}
      </Modal>
    </>
  );
};
export default VideoModal;
