import React from 'react';

import './styles.scss';

const NewsArticle = ({ data }) => (
    <article className="article">
      <div className="article__top">
        <h2 className="article__title">{data.title}</h2>
      </div>
      <div className="article__body">
        <img 
          src={data.image} 
          className={(data.image === 'None' ? 'article__img article__img--empty' : 'article__img')} 
          alt="article"
        />
        <p className="article__txt">{data.description}</p>
      </div>
      <a href={data.url} className="btn" target="_blank" without rel="noopener noreferrer">read full article</a>
    </article>
)

export default NewsArticle;
