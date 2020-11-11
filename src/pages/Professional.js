import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { useGlobalContext } from '../context';
import uniqid from 'uniqid';

const Professional = () => {
  const { professional, setProfessional } = useGlobalContext();
  const [editID, setEditID] = useState(null);
  const [editCompany, setEditCompany] = useState('');
  const [editRole, setEditRole] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');

  useEffect(() => {
    document.getElementById('Company').focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('Professional', JSON.stringify(professional));
  });

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
    document.getElementById('Company').value = '';
    document.getElementById('Role').value = '';
    document.getElementById('Job Description').value = '';
    document.getElementById('Start Date').value = '';
    document.getElementById('End Date').value = '';
  };

  const removeProfession = (id) => {
    setProfessional(professional.filter((job) => job.id !== id));
  };

  const editItem = (id) => {
    const editPro = professional.find((item) => item.id === id);

    setEditCompany(editPro.company);
    setEditRole(editPro.role);
    setEditDesc(editPro.desc);
    setEditStart(editPro.start);
    setEditEnd(editPro.end);

    setEditID(id);
  };

  const updatePro = (id) => {
    setProfessional(
      professional.map((job) => {
        if (job.id === editID) {
          return {
            ...job,
            company: editCompany,
            role: editRole,
            desc: editDesc,
            start: editStart,
            end: editEnd,
          };
        } else {
          return job;
        }
      })
    );
    setEditID(null);
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

        {professional.length > 0 && (
          <div className='edHolder'>
            {professional.map((job) => {
              return (
                <div key={job.id} className='edDiv'>
                  {job.id === editID ? (
                    <div className='edInfo'>
                      <input
                        id='editCompany'
                        value={editCompany}
                        onChange={(e) => setEditCompany(e.target.value)}
                      ></input>
                      <input
                        id='editRole'
                        value={editRole}
                        onChange={(e) => setEditRole(e.target.value)}
                      ></input>
                      <textarea
                        id='editDesc'
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                      ></textarea>
                      <div className='textInput'>
                        <label htmlFor={editStart}>Start Date</label>
                        <input
                          type='date'
                          value={editStart}
                          onChange={(e) => setEditStart(e.target.value)}
                        />
                      </div>
                      <div className='textInput'>
                        <label htmlFor={editEnd}>End Date</label>
                        <input
                          type='date'
                          value={editEnd}
                          onChange={(e) => setEditEnd(e.target.value)}
                        />
                      </div>
                    </div>
                  ) : (
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
                  )}

                  <div className='edDivButtonHolder'>
                    <button
                      onClick={() => removeProfession(job.id)}
                      className='btn removeEd'
                    >
                      X
                    </button>
                    <button
                      onClick={() =>
                        editID === job.id ? updatePro(job.id) : editItem(job.id)
                      }
                      className=' btn  edit-btn'
                    >
                      {editID === job.id ? <p>save</p> : <p>edit</p>}
                    </button>
                  </div>
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
