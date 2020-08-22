import React from 'react';

import YoutubeVideo from '../../components/YoutubeVideo';

import './styles.scss';

const FilterResults = ({activeFilter, videos}) => {
  return (
    <section className="category__unit">
      <section className="category__description">
        <h2>{activeFilter}'s results</h2>
      </section>
      <section className="category__results filtered">
        {videos.map(video => (
          <YoutubeVideo key={video.id} video={video}/>
        ))}
      </section>
    </section>
  )
}

export default FilterResults;
