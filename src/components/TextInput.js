import React from 'react';

const TextInput = ({ label, type }) => {
  return (
    <div className='textInput'>
      {type === 'date' && <label htmlFor={label}>{label}</label>}
      <input id={label} type={type} placeholder={label} />
    </div>
  );
};

export default TextInput;
