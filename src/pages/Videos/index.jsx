import React, {useState} from 'react';

import VideosContainer from '../../components/VideosContainer';
import FilterResults from '../../components/FilterResults';

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
    'maths',
    'physics',
    'immersion',
    'science',
    'xr',
  ];

  function getFilteredVideos() {
    let filteredVideos = [];
    categories.map(category => {
      category.videos.map(video => {
        if (video.tag === activeFilter) {
          filteredVideos.push(video.id);
        }
      });
    });
    return filteredVideos;
  }

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
          (activeFilter === null) ?
          categories.map(category => <VideosContainer category={category}/>)
          :
          <FilterResults activeFilter={activeFilter} videoIds={getFilteredVideos()}/>
        }
      </section>
    </section>
  )
}

export default Home;
