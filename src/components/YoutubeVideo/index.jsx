import React, {useState} from 'react';
import { AiOutlineFullscreen ,AiFillYoutube } from 'react-icons/ai';

import YoutubeVideoModal from '../YoutubeVideoModal';
import './styles.scss';

const YoutubeVideo = ({ video }) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const maxTitleLength = 25; // trim youtube titles to 25 characters

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
      <YoutubeVideoModal 
        videoId={video.id}
        modalIsOpen={modalIsOpen} 
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
          srcDoc={`<html style='overflow: hidden;'><a href=https://www.youtube.com/embed/${video.id}?autoplay=1><img style='width: 100%; height: 100%; object-fit: cover;' src=https://img.youtube.com/vi/${video.id}/hqdefault.jpg></a></html>`}
        />
      </div>
    </>
  );
}

export default YoutubeVideo;
