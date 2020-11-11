import React, { useEffect, componentDidMount } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { useGlobalContext } from '../context';
import uniqid from 'uniqid';

const Professional = () => {
  const { professional, setProfessional } = useGlobalContext();

  const addProfession = () => {
    const newPro = {
      id: uniqid(),
      company: document.getElementById('Company').value,
      role: document.getElementById('Role').value,
      desc: document.getElementById('Job Description').value,
      start: document.getElementById('Start Date').value,
      end: document.getElementById('End Date').value,
    };
    setProfessional([...professional, newPro]);
  };

  const removeProfession = (id) => {
    setProfessional(professional.filter((job) => job.id !== id));
  };

  return (
    <section className='section'>
      <h1 className='pageHeader'>Professional</h1>
      <article className='article'>
        <div className='form'>
          <TextInput label='Company' type='text' />
          <TextInput label='Role' type='text' />
          <textarea
            id='Job Description'
            placeholder='Job Description'
            className='textInput'
          ></textarea>
          <TextInput label='Start Date' type='date' />
          <TextInput label='End Date' type='date' />
        </div>
        <button className='btn' onClick={() => addProfession()}>
          Add
        </button>
        {/* Pile up the added jobs here */}

        {professional.length > 0 && (
          <div className='edHolder'>
            {professional.map((job) => {
              return (
                <div key={job.id} className='edDiv'>
                  <div className='edInfo'>
                    <h3>{job.company}</h3>
                    <h4>{job.role}</h4>
                    <p>{job.desc}</p>
                    <div>
                      <h5>
                        {job.start} - {job.end}
                      </h5>
                    </div>
                  </div>
                  <button
                    onClick={() => removeProfession(job.id)}
                    className='btn removeEd'
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        )}
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
