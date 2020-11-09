import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h1 className='pageHeader'>Error</h1>
      <article className='article article-empty'>
        <Link to='/' className='btn'>
          Back home
        </Link>
      </article>
    </section>
  );
};

export default Error;
