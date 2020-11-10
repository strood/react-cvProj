import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Personal = () => {
  const { personal, setPersonal } = useGlobalContext();
  const firstNameVal = useRef(personal.first);
  const lastNameVal = useRef(personal.last);
  const emailVal = useRef(personal.email);
  const phoneVal = useRef(personal.phone);

  const { first, last, email, phone } = personal;
  React.useEffect(() => {
    firstNameVal.current.focus();
  }, []);

  const infoUpdate = () => {
    setPersonal({
      first: firstNameVal.current.value,
      last: lastNameVal.current.value,
      email: emailVal.current.value,
      phone: phoneVal.current.value,
    });
  };

  return (
    <section className='section'>
      <h1 className='pageHeader'>Personal Info</h1>
      <article className='article article-content'>
        <div className='form'>
          <input
            placeholder='First Name'
            type='text'
            ref={firstNameVal}
            onChange={infoUpdate}
            value={first === '' ? '' : `${first}`}
          />
          <input
            placeholder='Last Name'
            type='text'
            ref={lastNameVal}
            onChange={infoUpdate}
            value={last === '' ? '' : `${last}`}
          />
          <input
            placeholder='Email'
            type='email'
            ref={emailVal}
            onChange={infoUpdate}
            value={email === '' ? '' : `${email}`}
          />
          <input
            placeholder='Phone'
            type='tel'
            ref={phoneVal}
            onChange={infoUpdate}
            value={phone === '' ? '' : `${phone}`}
          />
        </div>
        <Link to='/education' className='btn'>
          Next
        </Link>
      </article>
    </section>
  );
};

export default Personal;
