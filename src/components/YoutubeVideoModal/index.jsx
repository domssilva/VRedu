import React from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

import './styles.scss';

Modal.setAppElement('#root');

const YoutubeVideoModal = ({ videoLink, modalIsOpen, closeModal, afterOpenModal }) => (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Fullscreen Video"
      className="Modal"
      >
      <div className="Modal__tab">
        <button className="Modal__close" onClick={closeModal}>
          <AiOutlineClose className="youtube__icon"/>
        </button>
      </div>
      <div className="Modal__body">
        <iframe title="Fullscreen video" src={videoLink}/>
      </div>
    </Modal>
);

export default YoutubeVideoModal;
