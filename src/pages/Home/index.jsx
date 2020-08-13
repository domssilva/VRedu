import React from 'react';

import VideoCarousel from '../../components/VideoCarousel';
import videos from '../../data/youtube.data';
import './styles.scss';

const Home = () => {

  return (
    <section className="container">

      <article className="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet esse dolorem minima nam temporibus aspernatur obcaecati, fugit cupiditate, asperiores dolorum id sequi dignissimos tempora.
      </article>

      <section className="category">
        {
          videos.map(element => (
            <>
              <h2 className="category__title">{element.category}</h2>
              <p>{element.categoryDescription}</p>
              <VideoCarousel key={element.id} element={element}/>
            </>
          ))
        }
      </section>
    </section>
  )
}

export default Home;
