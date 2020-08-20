import React, {useState, useEffect} from 'react';

import newsDummyData from '../../data/apinews.data';
import './styles.scss';

const News = () => {

  const [vrNews, setVrNews] = useState([]);

  // if true, uses dummy data from a js file
  const development = true;

  const apiKey = process.env.REACT_APP_API_TOKEN;
  const url = `https://api.currentsapi.services/v1/search?keywords=Virtual%20Reality&language=en&apiKey=${apiKey}`;

  // don't make the api call outside useEffect (rendering loop will consume API requests!)
  useEffect(() => {
    if (!development) {
      var req = new Request(url);
      fetch(req)
      .then(res => res.json())
      .then(data => setVrNews(data.news))
      .catch(error => console.log(error));
    } else {
      setVrNews(newsDummyData);
    }
  }, []);

  return (
    <section className="news">
      <div className="news__intro">
        <h1>Latest VR news</h1>
        {
          (vrNews.length === 0)  ? (
            <div className="error">
              <img src="https://media2.giphy.com/media/5xaOcLyjXRo4hX5UhSU/giphy.gif" alt="error"/>
            </div>
          ) : ''
        }
      </div>
      <main className="home__news">
        {
          vrNews.map(newsData => (
            <article className="article">
              <div className="article__top">
                <h2 className="article__title">{newsData.title}</h2>
              </div>
              <div className="article__body">
                <img 
                  src={newsData.image} 
                  className={(newsData.image === 'None' ? 'article__img article__img--empty' : 'article__img')} 
                  alt="article"
                />
                <p className="article__txt">{newsData.description}</p>
              </div>
              <a href={newsData.url} className="btn" target="_blank" without rel="noopener noreferrer">read full article</a>
            </article>
          ))
        }
      </main>
    </section>
  )
}

export default News;
