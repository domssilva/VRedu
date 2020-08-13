import React from 'react';

import './styles.scss';

const YoutubeVideo = (props) => {
  return (
    <iframe 
      className='youtube__video' 
      title={props.title}
      src={`https://www.youtube.com/embed/${props.videoid}`}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
    />
  );
}

export default YoutubeVideo;
