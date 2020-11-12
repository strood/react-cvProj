import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Modal from '../components/Modal';

const Complete = () => {
  const [modal, setModal] = useState(false);
  const {
    personal,
    education,
    professional,
    setPersonal,
    setEducation,
    setProfessional,
  } = useGlobalContext();

  const resetLocal = () => {
    localStorage.removeItem('Personal');
    setPersonal({ first: '', last: '', email: '', phone: '' });
    localStorage.removeItem('Professional');
    setProfessional([]);
    localStorage.removeItem('Education');
    setEducation([]);
  };

  return (
    <>
      <Modal modal={modal} resetLocal={resetLocal} setModal={setModal} />
      <section className='section'>
        <h1 className='pageHeader'>Complete</h1>
        <article className='article'>
          <div className='final'>
            <div className='top'>
              <h2>
                {personal.first} {personal.last}
              </h2>
              <h1>{personal.phone}</h1>
              <h1>{personal.email}</h1>
            </div>
            {education.length === 0 ? null : (
              <div className='edHolder'>
                <h2 className='edTitle'>Education</h2>
                {education.map((ed) => {
                  return (
                    <div key={ed.id} className='ed'>
                      <h2>{ed.school}</h2>
                      <h1>{ed.disc}</h1>
                      <h1>
                        {ed.start}-{ed.end}
                      </h1>
                    </div>
                  );
                })}
              </div>
            )}
            <div className='pro'>
              {professional.length === 0 ? null : (
                <div className='proHolder'>
                  <h2 className='proTitle'>Professional Experience</h2>
                  {professional.map((job) => {
                    return (
                      <div key={job.id} className='pro'>
                        <h2>{job.company}</h2>
                        <h1>{job.drole}</h1>
                        <p>{job.desc}</p>
                        <h1>
                          {job.start}-{job.end}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className='buttonHolder'>
            <Link to='/professional' className='btn'>
              {'<'} Back
            </Link>
            <button onClick={() => setModal(true)} className='btn btn-restart'>
              Restart
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Complete;
