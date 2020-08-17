import React from 'react';

import VideoCarousel from '../../components/VideoCarousel';

import categories from '../../data/youtube.data';
import './styles.scss';

const Home = () => {

  return (
    <section className="container">

      <article className="intro">
        <div className="intro__filters">
          <p>Completely new to VR? pick the <strong>introductory</strong> filter to check all the videos explaining the basic concepts of virtual reality.</p>
          <h3>Filters:</h3>
          <ul>
            <li>introductory</li>
            <li>lectures</li>
            <li>career</li>
            <li>math and physics</li>
            <li>computer graphics</li>
            <li>art</li>
            <li>tech</li>
          </ul>
        </div>

      </article>

      <section className="category">
        {
          categories.map(category => (
            <section className="category__unit" key={`${category.id}-${category.urls}`}>
              <section className="category__description">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </section>
              <VideoCarousel category={category}/>
            </section>
          ))
        }
      </section>
    </section>
  )
}

export default Home;
