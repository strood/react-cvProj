import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h1>Error</h1>
      <Link to='/' className='btn'>
        Back home
      </Link>
    </section>
  );
};

export default Error;
