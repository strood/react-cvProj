import React from 'react';

export default function EditEducation({
  editSchool,
  setEditSchool,
  editDisc,
  setEditDisc,
  editStart,
  setEditStart,
  editEnd,
  setEditEnd,
}) {
  return (
    <div className='Info'>
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
  );
}
