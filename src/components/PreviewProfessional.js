import React from 'react';

export default function PreviewProfessional({
  company,
  role,
  desc,
  start,
  end,
}) {
  return (
    <div className='Info'>
      <h3>{company}</h3>
      <h4>{role}</h4>
      <p>{desc}</p>
      <div>
        <h5>
          {start} - {end}
        </h5>
      </div>
    </div>
  );
}
