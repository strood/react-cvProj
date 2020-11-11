import React from 'react';

export default function EditProfessional({
  editCompany,
  setEditCompany,
  editRole,
  setEditRole,
  editDesc,
  setEditDesc,
  editStart,
  setEditStart,
  editEnd,
  setEditEnd,
}) {
  return (
    <div className='Info'>
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
  );
}
