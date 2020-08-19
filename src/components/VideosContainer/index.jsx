import React from 'react';

import VideoCarousel from '../VideoCarousel';

const VideosContainer = ({category}) => {
  
  return (
    <section className="category__unit" key={category.videos[0].id}>
      <section className="category__description">
        <h2>{category.name}</h2>
        <p>{category.description}</p>
      </section>
      <VideoCarousel category={category}/>
    </section>
  );
}

export default VideosContainer;