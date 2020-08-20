import React, {useState} from 'react';
import { AiOutlineFullscreen ,AiFillYoutube } from 'react-icons/ai';

import YoutubeVideoModal from '../YoutubeVideoModal';
import './styles.scss';

const YoutubeVideo = ({ videoid, name }) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  const iframeLink = `https://www.youtube.com/embed/${videoid}`;

  return (
    <>
      <YoutubeVideoModal 
        videoLink={iframeLink}
        videoId={videoid}
        modalIsOpen={modalIsOpen} 
        closeModal={closeModal}
      />
      <div className='youtube__video'>
        <div className='youtube__tab'>
          <a href={`https://www.youtube.com/watch?v=${videoid}`} target='_blank' rel='noopener noreferrer'>
            <AiFillYoutube className='youtube__icon'/>
          </a>
          <AiOutlineFullscreen onClick={openModal} className='youtube__icon'/>
        </div>
        <iframe 
          title={name}
          frameBorder='0'
          width='100%'
          height='100%'
          allow='autoplay'
          srcdoc={`<html style='overflow: hidden;'><a href=https://www.youtube.com/embed/${videoid}?autoplay=1><img style='width: 100%; height: 100%; object-fit: cover;' src=https://img.youtube.com/vi/${videoid}/hqdefault.jpg></a></html>`}
          allowFullScreen
        />
      </div>
    </>
  );
}

export default YoutubeVideo;
