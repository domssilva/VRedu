import React from 'react';

import './styles.scss';

const Skeleton = () => {
  return (
  <article className="shimmer">
      <div className="shimmer__top">
        <span className="shimmer__title"></span>
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
      <span className="shimer__btn"></span>
    </article>
  )
}

export default Skeleton;
