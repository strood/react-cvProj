import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

const Education = () => {
  return (
    <section className='section'>
      <h1 className='pageHeader'>Education</h1>
      <article className='article'>
        <div className='form'>
          <TextInput label='School' type='text' />
          <TextInput label='Discipline' type='text' />
          <TextInput label='Start Date' type='date' />
          <TextInput label='End Date' type='date' />
        </div>
        <button onClick='#' className='btn'>
          Add
        </button>
        {/* Pile up the added educations here */}
        <div className='buttonHolder'>
          <Link to='/personal' className='btn'>
            Back
          </Link>
          <Link to='/professional' className='btn'>
            Continue
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Education;
