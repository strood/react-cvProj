import React from 'react';

export default function PreviewEducation({ school, disc, start, end }) {
  //   console.log(ed);
  return (
    <div className='Info'>
      <h3>{school}</h3>
      <h4>{disc}</h4>

      <div>
        <h5>
          {start} - {end}
        </h5>
      </div>
    </div>
  );
}
