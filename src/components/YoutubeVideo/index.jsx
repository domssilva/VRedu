import React, {useState} from 'react';
import { AiOutlineFullscreen ,AiFillYoutube } from "react-icons/ai";

import YoutubeVideoModal from '../YoutubeVideoModal';
import './styles.scss';

const YoutubeVideo = (props) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  const iframeLink = `https://www.youtube.com/embed/${props.videoid}`;

  return (
    <>
      <YoutubeVideoModal 
        videoLink={iframeLink}
        modalIsOpen={modalIsOpen} 
        closeModal={closeModal}
      />
      <div className="youtube__video">
        <div className="youtube__tab">
          <a href={`https://www.youtube.com/watch?v=${props.videoid}`} target='_blank' rel="noopener noreferrer">
            <AiFillYoutube className="youtube__icon"/>
          </a>
          <AiOutlineFullscreen onClick={openModal} className="youtube__icon"/>
        </div>
        <iframe 
          title={props.name}
          src={iframeLink}
          frameBorder='0'
          allowFullScreen
        />
      </div>
    </>
  );
}

export default YoutubeVideo;
