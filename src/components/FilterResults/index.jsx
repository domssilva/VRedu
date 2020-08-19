import React from 'react';

import YoutubeVideo from '../../components/YoutubeVideo';

const FilterResults = ({activeFilter, videoIds}) => {
  return (
    <section className="category__unit">
      <section className="category__description">
        <h2>{activeFilter}'s results</h2>
      </section>
      <section className="category__results">
        {videoIds.map(id => (
          <YoutubeVideo videoid={id}/>
        ))}
      </section>
    </section>
  )
}

export default FilterResults;
