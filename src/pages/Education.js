import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { useGlobalContext } from '../context';
import uniqid from 'uniqid';

const Education = () => {
  const { education, setEducation } = useGlobalContext();

  useEffect(() => {
    document.getElementById('School').focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('Education', JSON.stringify(education));
  });

  const addEducation = () => {
    const newEd = {
      id: uniqid(),
      school: document.getElementById('School').value,
      disc: document.getElementById('Discipline').value,
      start: document.getElementById('Start Date').value,
      end: document.getElementById('End Date').value,
    };
    setEducation([...education, newEd]);
  };

  const removeEducation = (id) => {
    setEducation(education.filter((ed) => ed.id !== id));
  };

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

        <button className='btn' onClick={() => addEducation()}>
          Add
        </button>

        {education.length > 0 && (
          <div className='edHolder'>
            {education.map((ed) => {
              return (
                <div key={ed.id} className='edDiv'>
                  <div className='edInfo'>
                    <h3>{ed.school}</h3>
                    <h4>{ed.disc}</h4>
                    <div>
                      <h5>
                        {ed.start} - {ed.end}
                      </h5>
                    </div>
                  </div>
                  <button
                    onClick={() => removeEducation(ed.id)}
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
          <Link to='/personal' className='btn'>
            Back
          </Link>
          <Link to='/professional' className='btn'>
            Next
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Education;
