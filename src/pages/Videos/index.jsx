import React, {useState, useEffect} from 'react';

import VideosContainer from '../../components/VideosContainer';
import FilterResults from '../../components/FilterResults';

import categories from '../../data/youtube.data';
import './styles.scss';

const Home = () => {

  const [activeFilter, setActiveFilter] = useState(null);
  const [carouselVideoQtd, setCarouselVideoQtd] = useState(3);
  const [windowSize, setWindowSize] = useState({});

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
          filteredVideos.push(video);
        }
      });
    });
    return filteredVideos;
  }

  function updateWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    carouselHack();
  }

  function carouselHack() {
    setTimeout(() => {
      setActiveFilter('xr');
      setActiveFilter(null);
    }, 1);
  }
  
  useEffect(() => {
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    if (windowSize.width > 1300 && carouselVideoQtd !== 4) {
      setCarouselVideoQtd(4);
    }

    if (windowSize.width > 800 && carouselVideoQtd !== 3) {
      setCarouselVideoQtd(3);
    }

    if (windowSize.width < 800 && carouselVideoQtd !== 2) {
      setCarouselVideoQtd(2);
    }

    if (windowSize.width < 600 && carouselVideoQtd !== 1) {
      setCarouselVideoQtd(1);
    }
  }, []);
  
  useEffect(() => {
    /* MEDIA QUERIES
      @media (max-width: 600px)
      @media (max-width: 900px)
      @media (max-width: 1200px)
      @media (min-width: 1800px)
   */

  if (windowSize.width > 1300 && carouselVideoQtd !== 4) {
      setCarouselVideoQtd(4);
    }

    if (windowSize.width > 800 && carouselVideoQtd !== 3) {
      setCarouselVideoQtd(3);
    }

    if (windowSize.width < 800 && carouselVideoQtd !== 2) {
      setCarouselVideoQtd(2);
    }

    if (windowSize.width < 600 && carouselVideoQtd !== 1) {
      setCarouselVideoQtd(1);
    }

  }, [windowSize]);

  return (
    <section className="container">
      <article className="filter">
        <h3>Filters:</h3>
        <div className="filter__container">
          {
            filters.map(filterName => (
            <button 
              key={filterName}
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
          categories.map(category => <VideosContainer key={category.id} category={category} carouselVideoQtd={carouselVideoQtd}/>)
          :
          <FilterResults activeFilter={activeFilter} videos={getFilteredVideos()}/>
        }
      </section>
    </section>
  )
}

export default Home;
