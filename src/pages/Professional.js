import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

const Professional = () => {
  return (
    <section className='section'>
      <h1 className='pageHeader'>Professional</h1>
      <article className='article'>
        <div className='form'>
          <TextInput label='Company' type='text' />
          <TextInput label='Role' type='text' />
          <textarea
            placeholder='Job Description'
            className='textInput'
          ></textarea>
          <TextInput label='Start Date' type='date' />
          <TextInput label='End Date' type='date' />
        </div>
        <button className='btn'>Add</button>
        {/* Pile up the added jobs here */}
        <div className='buttonHolder'>
          <Link to='/education' className='btn'>
            Back
          </Link>
          <Link to='/complete' className='btn'>
            Next
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Professional;
