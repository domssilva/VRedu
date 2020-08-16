import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import YoutubeVideo from '../../components/YoutubeVideo';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './styles.scss';

const VideoCarousel = ({category}) => {

  return (
        <Splide 
          className="category__row"
          options={{
            rewind : false,
            perPage : 3,
            pagination: false,
            width : '100%',
            gap : '0.5rem',
            type: 'slide',
          }}
        >
          {
            category.urls.map(videoid => (
              <SplideSlide>
                <YoutubeVideo key={videoid} title={category.name} videoid={videoid}/>
              </SplideSlide>
            ))
          }
        </Splide>
  )
}

export default VideoCarousel;
