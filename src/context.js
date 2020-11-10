import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [education, setEducation] = useState([
    {
      id: '42564',
      school: 'Holy Family',
      disc: 'Coloring',
      start: '1996-09-01',
      end: '2003-03-01',
    },
  ]);
  const [professional, setProfessional] = useState([
    {
      id: '3565',
      company: 'Burger King',
      role: 'Grillmaster',
      desc: 'Manned the grill, trained the noobs, dunked the tenders.',
      start: '20010-01-01',
      end: '2015-03-01',
    },
  ]);
  const [personal, setPersonal] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
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
