import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { useGlobalContext } from '../context';
import uniqid from 'uniqid';
import PreviewEducation from '../components/PreviewEducation';
import EditEducation from '../components/EditEducation';

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

        <button className='btn add-btn' onClick={() => addEducation()}>
          Add
        </button>

        {education.length > 0 && (
          <div className='Holder'>
            {education.map((ed) => {
              return (
                <div key={ed.id} className='Div'>
                  {ed.id === editID ? (
                    <EditEducation
                      editSchool={editSchool}
                      setEditSchool={setEditSchool}
                      editDisc={editDisc}
                      setEditDisc={setEditDisc}
                      editStart={editStart}
                      setEditStart={setEditStart}
                      editEnd={editEnd}
                      setEditEnd={setEditEnd}
                    />
                  ) : (
                    <PreviewEducation {...ed} />
                  )}

                  <div className='DivButtonHolder'>
                    <button
                      onClick={() => removeEducation(ed.id)}
                      className='btn removeEd'
                    >
                      X
                    </button>
                    {editID === ed.id ? (
                      <button
                        className=' btn  add-btn'
                        onClick={() => updateEd(ed.id)}
                      >
                        <p>save</p>
                      </button>
                    ) : (
                      <button
                        className=' btn  edit-btn'
                        onClick={() => editItem(ed.id)}
                      >
                        <p>edit</p>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className='buttonHolder'>
          <Link to='/personal' className='btn'>
            {'<'} Back
          </Link>
          <Link to='/professional' className='btn'>
            Next {'>'}
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Education;
