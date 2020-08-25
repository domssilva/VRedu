import React from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import './styles.scss';

Modal.setAppElement('#root');

const YoutubeVideoModal = ({ videoId, modalIsOpen, closeModal, afterOpenModal }) => (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel='Fullscreen Video'
      className='Modal'
      >
      <div className='Modal__tab'>
        <button className='Modal__close' onClick={closeModal}>
          <AiOutlineClose className='youtube__icon'/>
        </button>
      </div>
      <div className='Modal__body'>
        <iframe 
          title='Fullscreen video' 
          width='100%'
          height='100%'
          allow='autoplay'
          srcDoc={`<html style='display: block; margin: auto;'><a style='display: block; background-color: black;' href=https://www.youtube.com/embed/${videoId}?autoplay=1><img style='width: 100%; height: 100%; object-fit: cover;' src=https://img.youtube.com/vi/${videoId}/hqdefault.jpg></a></html>`}
        />
      </div>
    </Modal>
);

export default YoutubeVideoModal;
