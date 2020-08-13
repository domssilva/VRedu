import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import YoutubeVideo from '../../components/YoutubeVideo';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.scss';

const VideoCarousel = ({element}) => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div key={element.id} className="category__row">
          {
            element.url.map(videoid => (
              <div>
                <YoutubeVideo key={element.id} title={element.category} videoid={videoid}/>
              </div>
            ))
          }
        </div>
      </Carousel>
  )
}

export default VideoCarousel;
