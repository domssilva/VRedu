import React, {useState, useEffect} from 'react';

import NewsArticle from '../../components/NewsArticle';
import LoadingNewsArticle from '../../components/Shimmer/LoadingNewsArticle';

import newsDummyData from '../../data/apinews.data';
import './styles.scss';

const News = ({ isLoading }) => {

  const [vrNews, setVrNews] = useState([]);

  // if true, uses dummy data from a js file
  const development = false;

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
      </div>
      <main className="home__news">
        {
          isLoading ? (
            <LoadingNewsArticle/>
          ) : 
          vrNews.map(newsData => <NewsArticle data={newsData}/>)
        }
      </main>
    </section>
  )
}

export default News;
