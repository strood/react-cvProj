import React from 'react';
import { Link } from 'react-router-dom';

export default function Modal({ modal, resetLocal, setModal }) {
  return (
    <div className={modal ? 'modal' : 'modal hidden'}>
      <div className='modalMessage'>
        <h1>WARNING</h1>
        <h2>Are you sure you want to reset your CV?</h2>
        <h2>You will lose all your info.</h2>
        <div>
          <button className='btn' onClick={() => setModal(false)}>
            No, go back!
          </button>
          <Link to='/' className='btn btn-restart' onClick={() => resetLocal()}>
            Yes, continue!
          </Link>
        </div>
      </div>
    </div>
  );
}
