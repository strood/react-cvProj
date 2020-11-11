import React, { useState, useContext } from 'react';
import uniqid from 'uniqid';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [education, setEducation] = useState([
    {
      id: uniqid(),
      school: 'Holy Family',
      disc: 'Coloring',
      start: '1996-09-01',
      end: '2003-03-01',
    },
    {
      id: uniqid(),
      school: 'St Francis',
      disc: 'Gym',
      start: '1996-09-01',
      end: '2003-03-01',
    },
    {
      id: uniqid(),
      school: 'University of Alberta',
      disc: 'Economics - Political Science',
      start: '1996-09-01',
      end: '2003-03-01',
    },
  ]);
  const [professional, setProfessional] = useState([
    {
      id: uniqid(),
      company: 'Burger King',
      role: 'Grillmaster',
      desc: 'Manned the grill, trained the noobs, dunked the tenders.',
      start: '2000-01-01',
      end: '2005-03-01',
    },
    {
      id: uniqid(),
      company: 'Best Buy',
      role: 'Sticker Guy',
      desc: 'Used my sticker gun to battle the forces of evil.',
      start: '2010-01-01',
      end: '2015-03-01',
    },
  ]);
  const [personal, setPersonal] = useState({
    first: 'Jimbob',
    last: 'Timms',
    email: 'koster@gmail.com',
    phone: '4038990531',
  });
  return (
    <AppContext.Provider
      value={{
        education,
        professional,
        personal,
        setEducation,
        setProfessional,
        setPersonal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
