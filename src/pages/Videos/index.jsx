import React from 'react';

import VideoCarousel from '../../components/VideoCarousel';

import categories from '../../data/youtube.data';
import './styles.scss';

const Home = () => {

  return (
    <section className="container">

      <article className="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet esse dolorem minima nam temporibus aspernatur obcaecati, fugit cupiditate, asperiores dolorum id sequi dignissimos tempora.
      </article>

      <section className="category">
        {
          categories.map(category => (
            <section className="category" key={`${category.id}-${category.urls}`}>
              <h2 className="category__title">{category.name}</h2>
              <p>{category.description}</p>
              <VideoCarousel category={category}/>
            </section>
          ))
        }
      </section>
    </section>
  )
}

export default Home;
