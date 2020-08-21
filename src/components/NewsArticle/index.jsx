import React from 'react';

import randomArticleImage0 from '../../media/article-default/random-0.jpg';
import randomArticleImage1 from '../../media/article-default/random-1.jpg';
import randomArticleImage2 from '../../media/article-default/random-2.jpg';
import randomArticleImage3 from '../../media/article-default/random-3.jpg';
import randomArticleImage4 from '../../media/article-default/random-5.jpg';
import randomArticleImage5 from '../../media/article-default/random-4.jpg';

import './styles.scss';

const NewsArticle = ({ data }) => {

  function getRandomPic() {
    /*
      returns a random photo in media/article-default/ 
      for articles without photos. 
      images are named as random-X.jpg
    */
  
    let randomBetween0and5 = () => {
     return Math.floor(Math.random() * (5 - 1));
    }
    
    let randomPics = [
      randomArticleImage0,
      randomArticleImage1,
      randomArticleImage2,
      randomArticleImage3,
      randomArticleImage4,
      randomArticleImage5,
    ];
    
    return randomPics[randomBetween0and5()];
  }

  return (
    <article className="article">
      <div className="article__top">
        <h2 className="article__title">{data.title}</h2>
      </div>
      <div className="article__body">
        <img 
          src={(data.image === 'None' ? getRandomPic() : data.image)}
          className={(data.image === 'None' ? 'article__img article__img--empty' : 'article__img')} 
          alt="article"
        />
        <p className="article__txt">{data.description}</p>
      </div>
      <a href={data.url} className="btn" target="_blank" rel="noopener noreferrer">read full article</a>
    </article>
  )
}

export default NewsArticle;
