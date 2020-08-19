import React, {useState} from 'react';

import VideoCarousel from '../../components/VideoCarousel';

import categories from '../../data/youtube.data';
import './styles.scss';

const Home = () => {

  const [activeFilter, setActiveFilter] = useState(null);

  function handleFilterClick(filterName) {

    if (filterName === activeFilter) {
      return setActiveFilter(null);
    }

    setActiveFilter(filterName);

  }

  const filters = [
    'history',
    'howitworks',
    'unity',
    'unreal',
    'math',
    'physics',
    'immersion',
    'science',
    'xr',
  ];

  return (
    <section className="container">

      <article className="filter">
        <h3>Filters:</h3>
        <div className="filter__container">
          {
            filters.map(filterName => (
            <button 
              className={(activeFilter === filterName) ? "filter__btn active" : "filter__btn"}
              onClick={() => handleFilterClick(filterName)}
            >
                {filterName}
            </button>
            ))
          }
        </div>

      </article>

      <section className="category">
        {
          categories.map(category => (
            <section className="category__unit" key={category.videos[0].id}>
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
