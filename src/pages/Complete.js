import React from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
  return (
    <>
      <section className='section'>
        <h1 className='pageHeader'>Complete</h1>
        <article className='article'>
          <div className='buttonHolder'>
            <Link to='/professional' className='btn'>
              Back
            </Link>
            <Link to='/' className='btn btn-restart'>
              Restart
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default Complete;
