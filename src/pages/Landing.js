import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='section'>
      <h1 className='pageHeader'>Create-A-CV</h1>
      <article className='article article-empty'>
        <Link to='/personal' className='btn'>
          Continue
        </Link>
      </article>
    </section>
  );
};

export default Landing;
