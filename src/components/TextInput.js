import React from 'react';

const TextInput = ({ ref, label, type }) => {
  return (
    <div className='textInput'>
      {type === 'date' && <label htmlFor={label}>{label}</label>}
      <input ref={ref} id={label} type={type} placeholder={label} />
    </div>
  );
};

export default TextInput;
