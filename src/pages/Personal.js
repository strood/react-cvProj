import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
const Personal = () => {
  return (
    <section className='section'>
      <h1 className='pageHeader'>Personal Info</h1>
      <article className='article article-content'>
        <div className='form'>
          <TextInput label='First Name' type='text' />
          <TextInput label='Last Name' type='text' />
          <TextInput label='Email' type='email' />
          <TextInput label='Phone' type='tel' />
        </div>
        <Link to='/education' className='btn'>
          Continue
        </Link>
      </article>
    </section>
  );
};

export default Personal;
