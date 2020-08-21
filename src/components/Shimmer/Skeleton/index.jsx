import React from 'react';

import './styles.scss';

const Skeleton = () => {
  return (
  <article className="shimmer">
      <div className="shimmer__top">
        <div className="shimmer__title"></div>
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
      <div className="shimmer__btn"></div>
    </article>
  )
}

export default Skeleton;
