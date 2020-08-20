import React from 'react';

import './styles.scss';

const Skeleton = () => {
  return (
  <article className="shimmer">
      <div className="shimmer__top">
        <h2 className="shimmer__title"></h2>
      </div>
      <div className="shimmer__body">
        <div className='shimmer__img'/>
        <div className="shimmer__txt">
          <p className="shimmer__txt-p"></p>
          <p className="shimmer__txt-p"></p>
          <p className="shimmer__txt-p"></p>
          <p className="shimmer__txt-p"></p>
        </div>
      </div>
      <a href='#' className="btn" target="_blank" without rel="noopener noreferrer"></a>
    </article>
  )
}

export default Skeleton;
