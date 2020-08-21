import React from 'react';

// default photos for articles without images (randomly sorted)
import randomArticleImage0 from '../../media/article-default/random-0.jpg';
import randomArticleImage1 from '../../media/article-default/random-1.jpg';
import randomArticleImage2 from '../../media/article-default/random-2.jpg';
import randomArticleImage3 from '../../media/article-default/random-3.jpg';
import randomArticleImage4 from '../../media/article-default/random-5.jpg';
import randomArticleImage5 from '../../media/article-default/random-4.jpg';

import './styles.scss';

const NewsArticle = ({ data }) => {

  const {
    title,
    url,
    image,
    description
  } = data;

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

  function formatArticle(txt) {
    // set maximum article length to 200 characters.
    const maxArticleLength = 200;
    let formatted = txt.substring(0, maxArticleLength);

    return formatted.endsWith('...') ? formatted : formatted + '...';
  }

  return (
    <article className="article">
      <div className="article__top">
        <h2 className="article__title">{title}</h2>
      </div>
      <div className="article__body">
        <img 
          src={(image === 'None' ? getRandomPic() : image)}
          className={(image === 'None' ? 'article__img article__img--empty' : 'article__img')} 
          alt="article"
        />
        <p className="article__txt">{formatArticle(description)}</p>
      </div>
      <a href={url} className="btn" target="_blank" rel="noopener noreferrer">read full article</a>
    </article>
  )
}

export default NewsArticle;
