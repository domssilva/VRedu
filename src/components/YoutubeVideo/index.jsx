import React from 'react';

import './styles.scss';

const YoutubeVideo = (props) => {
  return (
      <iframe 
        className='youtube__video' 
        title={props.name}
        src={`https://www.youtube.com/embed/${props.videoid}`}
        frameBorder='0'
        allowFullScreen
      />
  );
}

export default YoutubeVideo;
