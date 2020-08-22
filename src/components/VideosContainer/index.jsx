import React from 'react';

import VideoCarousel from '../VideoCarousel';

const VideosContainer = ({category, carouselVideoQtd}) => {

  return (
    <section className="category__unit">
      <section className="category__description">
        <h2>{category.name}</h2>
        <p>{category.description}</p>
      </section>
      <VideoCarousel key={category.id} category={category} carouselVideoQtd={carouselVideoQtd}/>
    </section>
  );
}

export default VideosContainer;
