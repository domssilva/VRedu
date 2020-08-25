import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import YoutubeVideo from '../../components/YoutubeVideo';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './styles.scss';

const VideoCarousel = ({category}) => {

  return (
        <Splide 
          key={category.id}
          className="category__row"
          options={{
            rewind: false,
            perPage: 4,
            perMove: 0,
            pagination: false,
            lazyload: 'nearby',
            keyboard: 'focused',
            width: '100%',
            gap: '1.5rem',
            type: 'slide',
            arrows: true,
            easing: 'cubic-bezier(.42,.65,.27,.99)',
            throttle: 100,
            breakpoints: {
              1200: {
                perPage: 3,
              },
              900: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              }
            }
          }}
        >
          {
            category.videos.map(video => (
              <SplideSlide key={video.id}>
                <YoutubeVideo title={category.name} video={video}/>
              </SplideSlide>
            ))
          }
        </Splide>
  )
}

export default VideoCarousel;
