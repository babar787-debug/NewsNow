import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/news').then(res => {
      setArticles(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h2><Link to={`/news/${index}`}>{article.title}</Link></h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
