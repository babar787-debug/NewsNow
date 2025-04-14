import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>News Details</h1>
      <p>More info about news article #{id}</p>
    </div>
  );
};

export default News;
