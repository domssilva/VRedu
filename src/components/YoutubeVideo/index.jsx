import React, {useState} from 'react';
import { AiOutlineFullscreen ,AiFillYoutube } from 'react-icons/ai';

import YoutubeVideoModal from '../YoutubeVideoModal';
import './styles.scss';

const YoutubeVideo = ({ video }) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const maxTitleLength = 25; // trim youtube titles to 25 characters

  const iframeSrcDoc = `<html style='display: flex; justify-content: center; align-items:center;'><a style='display: block; background-color: black;' href=https://www.youtube.com/embed/${video.id}?autoplay=1><img style='display: block; margin: auto;' src=https://img.youtube.com/vi/${video.id}/hqdefault.jpg></a></html>`;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
      <YoutubeVideoModal 
        modalIsOpen={modalIsOpen} 
        iframeSrcDoc={iframeSrcDoc}
        closeModal={closeModal}
      />
      <div className='youtube__video'>
        <div className='youtube__tab'>
          <div className="left">
            <span className="youtube__tab-title">{video.title.substring(0, maxTitleLength)}...</span>
          </div>
          <div className="right">
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target='_blank' rel='noopener noreferrer'>
              <AiFillYoutube className='youtube__icon'/>
            </a>
            <AiOutlineFullscreen onClick={openModal} className='youtube__icon'/>
          </div>
        </div>
        <iframe 
          title={video.title}
          frameBorder='0'
          width='100%'
          height='100%'
          allow='autoplay'
          scrolling='no'
          srcDoc={iframeSrcDoc}
        />
      </div>
    </>
  );
}

export default YoutubeVideo;
