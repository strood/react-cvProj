import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { useGlobalContext } from '../context';
import uniqid from 'uniqid';

const Education = () => {
  const { education, setEducation } = useGlobalContext();
  const [editID, setEditID] = useState(null);
  const [editSchool, setEditSchool] = useState('');
  const [editDisc, setEditDisc] = useState('');
  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');

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
    document.getElementById('School').value = '';
    document.getElementById('Discipline').value = '';
    document.getElementById('Start Date').value = '';
    document.getElementById('End Date').value = '';
  };

  const removeEducation = (id) => {
    setEducation(education.filter((ed) => ed.id !== id));
  };

  const editItem = (id) => {
    const editEd = education.find((item) => item.id === id);

    setEditSchool(editEd.school);
    setEditDisc(editEd.disc);
    setEditStart(editEd.start);
    setEditEnd(editEd.end);

    setEditID(id);
  };

  const updateEd = (id) => {
    setEducation(
      education.map((ed) => {
        if (ed.id === editID) {
          return {
            ...ed,
            school: editSchool,
            disc: editDisc,
            start: editStart,
            end: editEnd,
          };
        } else {
          return ed;
        }
      })
    );
    setEditID(null);
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
                  {ed.id === editID ? (
                    <div className='edInfo'>
                      <input
                        id='editSchool'
                        value={editSchool}
                        onChange={(e) => setEditSchool(e.target.value)}
                      ></input>
                      <input
                        id='editDisc'
                        value={editDisc}
                        onChange={(e) => setEditDisc(e.target.value)}
                      ></input>
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
                      <h3>{ed.school}</h3>
                      <h4>{ed.disc}</h4>

                      <div>
                        <h5>
                          {ed.start} - {ed.end}
                        </h5>
                      </div>
                    </div>
                  )}

                  <div className='edDivButtonHolder'>
                    <button
                      onClick={() => removeEducation(ed.id)}
                      className='btn removeEd'
                    >
                      X
                    </button>
                    <button
                      onClick={() =>
                        editID === ed.id ? updateEd(ed.id) : editItem(ed.id)
                      }
                      className=' btn  edit-btn'
                    >
                      {editID === ed.id ? <p>save</p> : <p>edit</p>}
                    </button>
                  </div>
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
