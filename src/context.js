import React, { useState, useContext } from 'react';
import uniqid from 'uniqid';
const AppContext = React.createContext();

const getLocalPersonal = () => {
  let pers = localStorage.getItem('Personal');
  if (pers) {
    return JSON.parse(pers);
  } else {
    return { first: '', last: '', email: '', phone: '' };
  }
};

const getLocalEducation = () => {
  let edu = localStorage.getItem('Education');
  if (edu) {
    return JSON.parse(edu);
  } else {
    return [];
  }
};
const getLocalProfessional = () => {
  let prof = localStorage.getItem('Professional');
  if (prof) {
    return JSON.parse(prof);
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [education, setEducation] = useState(getLocalEducation()); //<----WILL USE

  const [professional, setProfessional] = useState(getLocalProfessional()); //<----WILL USE

  const [personal, setPersonal] = useState(getLocalPersonal()); // <----WILL USE

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
